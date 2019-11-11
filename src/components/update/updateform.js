import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

const UpdateForm = (props) => (
  <form className="updateform" onFocusCapture={props.formActive}>
    <input
      type="text"
      id="title"
      name="title"
      className="form-control form-control-md title"
      onFocus={props.formActive}
      onChange={props.handleChangeField}
      defaultValue={props.title}
    />
    <button
      className="cover-image-div"
      type="button"
      onClick={props.deleteCoverImage}
    >
      <img
        src={props.images[0]}
        className="cover-image"
        alt=""
        id="cover-image"
      />
      <span className="message">click on image to delete</span>
    </button>
    <input
      type="text"
      id="description"
      name="description"
      className="form-control form-control-md"
      onChange={props.handleChangeField}
      defaultValue={props.description}
      onFocus={props.formActive}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
    />
    <ReactQuill
      onChange={props.handleChange}
      value={props.body}
      modules={props.modules}
      formats={props.formats}
      placeholder="Article Body"
      onFocus={props.showToolbar}
      id="quill"
      className="md-form"
      theme="snow"
      required
    />
  </form>
);

UpdateForm.propTypes = {
  body: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  handleChangeField: PropTypes.func.isRequired,
  deleteCoverImage: PropTypes.func.isRequired,
  modules: PropTypes.object.isRequired,
  formats: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

UpdateForm.defaultProps = {
  body: '',
};

export default UpdateForm;
