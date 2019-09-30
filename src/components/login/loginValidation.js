import Joi from 'joi-browser';
import { toast } from 'react-toastify';


let schema = {
  email: Joi.string().required().label('Email'),
  username: Joi.string().required().label('Username'),
  password: Joi.string().required().label('Password'),
};

// added this to check
if (schema.email || schema.username) {
  schema = {
    email: Joi.string().label('Email'),
    username: Joi.string().label('Username'),
    password: Joi.string().required().label('Password'),
  };
}

export default (FormData) => {
  const { error } = Joi.validate(FormData, schema);

  if (error) {
    const errors = {};
    (error.details || []).forEach((err) => {
      errors[err.path[0]] = err.message.replace(/"/g, '');
    });
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key]);
    });
  }
  return error;
};
