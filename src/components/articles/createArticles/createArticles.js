import React from 'react';
import ReactQuill from 'react-quill';

import { connect } from 'react-redux';
import './createArticles.scss';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Joi from 'joi-browser';
import PropTypes from 'prop-types';
import createArticlesAction from '../../../redux/actions/article';
import { modules, formats } from './editor';

export class CreateArticles extends React.Component {
  schema = {
    title: Joi.string()
      .required()
      .label('Title'),
    description: Joi.string()
      .required()
      .label('Description'),
    body: Joi.string()
      .required()
      .label('Article Body'),
  };

  constructor(props) {
    super(props);
    this.modules = modules;
    this.formats = formats;
    this.state = {
      title: '',
      body: '',
      description: '',
      schema: '',
      images: [],
      isArticleCreated: false,
      imageWidget: cloudinary.createUploadWidget(
        {
          cloudName: 'nshuti-jonathan',
          uploadPreset: 'f31rkki4',
          multiple: false,
          cropping: true,
          croppingShowBackButton: true,
          singleUploadAutoClose: false,
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            const { images } = this.state;
            images[0] = result.info.secure_url;
            images[0] = images[0].toString();
            this.setState({ images });
          }
        },
      ),
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {
    const { createdArticleData, history } = nextProps;
    const isArticleCreated = createdArticleData;
    if (createdArticleData && Array.isArray(createdArticleData.err)) {
      createdArticleData.err.forEach(({ message }) => {
        toast.error(message);
      });
    }
    return isArticleCreated ? history.push('/profile') : '';
  };

  handleChange = (html) => {
    this.setState({ body: html });
  };

  showWidget = () => {
    const { imageWidget } = this.state;
    imageWidget.open();
  };

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  handleSubmit() {
    const { createArticlesAction: createArticle } = this.props;
    createArticle(this.state, this.schema);
  }

  render() {
    const { title, body, description } = this.state;
    return (
      <div className="col-12 col-lg-6 offset-lg-3 create-div">
        <h3>Create Article</h3>
        <div className="form-group">
          <label>Article Title</label>
          <input
            type="text"
            id="example1"
            className="form-control form-control-md"
            onChange={(ev) => this.handleChangeField('title', ev)}
            value={title}
          />
        </div>
        <button
          onClick={this.showWidget}
          required
          type="button"
          className="btn btn-primary float-left"
        >
          cover photo
        </button>
        <br />
        <br />
        <img src={this.state.images[0]} className="cover-image" alt="" />

        <div className="form-group">
          <label>Article description</label>
          <input
            type="text"
            className="form-control form-control-md"
            onChange={(ev) => this.handleChangeField('description', ev)}
            value={description}
          />
        </div>

        <ReactQuill
          onChange={this.handleChange}
          value={body}
          modules={this.modules}
          formats={this.formats}
          placeholder="Article Body"
          autoFocus
          className="md-form"
          theme="snow"
          required
        />
        <ToastContainer />

        <button
          onClick={this.handleSubmit}
          className="btn btn-primary float-right publish-button"
          type="button"
        >
          Publish
        </button>
      </div>
    );
  }
}
export const mapStateToProps = ({ createdArticleData }) => ({
  createdArticleData,
});
CreateArticles.propTypes = {
  createArticlesAction: PropTypes.func,
};
export default connect(
  mapStateToProps,
  { createArticlesAction },
)(CreateArticles);
