import React from 'react';
import { connect } from 'react-redux';
import '../articles/createArticles/createArticles.scss';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { modules, formats } from '../articles/createArticles/editor';

import Controls from './editMenu';
import UpdateForm from './updateform';

import {
  flashToast,
  getArticle,
  updateArticle,
} from '../../redux/actions/actionHelpers';

import {
  updateArticleAction,
  setEditModeAction,
} from '../../redux/actions/updateArticle';
import cloudConfig from '../../helpers/cloudconfig';

import './update.scss';

export class UpdateArticles extends React.Component {
  constructor(props) {
    super(props);
    this.modules = modules;
    this.formats = formats;
    this.getArticle = getArticle;
    this.state = {
      slug: '',
      title: '',
      body: '',
      description: '',
      schem: '',
      images: [],
      taglist: '',
      imageWidget: cloudinary.createUploadWidget(
        cloudConfig,
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
  }

  componentDidMount = async () => {
    const url = this.props.location.pathname;
    const slug = this.state.slug || url.split('/')[2];
    const article = await this.props.getArticle(slug);
    this.setState(article.data);
    flashToast(article);
  };

  deleteCoverImage = () => this.setState({ images: [''], editmode: false });

  handleChange = (html) => {
    this.setState({ body: html, editmode: true });
  };

  showWidget = () => {
    const { imageWidget } = this.state;
    this.formActive();
    imageWidget.open();
  };

  handleSubmit = async () => {
    const slug = () => this.state.slug;
    const action = await this.props.updateArticle(slug(), this.state);
    const { status } = action;
    this.props.update(status);
    this.props.setEditModeAction(this.props.success);
    if (this.props.success) {
      this.setState(action.data[1][0]);
    }
    flashToast(action);
  };

  backToArticle = () => this.props.history.push(`/articles/${this.state.slug}`);

  showToolbar = () => {
    const toolbar = document.querySelector('.ql-toolbar');
    toolbar.style.display = 'inline-block';
    toolbar.addEventListener('click', () => {
      toolbar.style.display = 'none';
    });
    // this.setState({ editmode: true });
  };

  formActive = () => this.props.setEditModeAction();

  handleChangeField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const props = {};
    Object.assign(props, this.props, this.state, this);
    return (
      <div className="container">
        <div id="updateform">
          <UpdateForm {...props} />
        </div>
        <Controls {...props} />
      </div>
    );
  }
}
UpdateArticles.propTypes = {
  location: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
  getArticle: PropTypes.func,
  updateArticle: PropTypes.func,
  success: PropTypes.any.isRequired,
};

UpdateArticles.defaultProps = {
  getArticle,
  updateArticle,
};

const mapStateToProps = (state) => ({
  success: state.updateArticle.success,
  editmode: state.updateArticle.editmode,
});

export default connect(
  mapStateToProps,
  { update: updateArticleAction, setEditModeAction },
)(UpdateArticles);
