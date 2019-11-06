import Joi from 'joi-browser';
import { toast } from 'react-toastify';


const schema = {
  body: Joi.string().required().trim(),
  parentCommentId: Joi.number(),
};

export default (FormData) => {
  const { error } = Joi.validate(FormData, schema);

  if (error) {
    const errors = {};
    (error.details || []).forEach((err) => {
      errors[err.path[0]] = err.message.replace(/"/g, '');
    });
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key]);
      return errors[key];
    });
  }
  return error;
};
