import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './commentTextArea.scss';
import userIcone from '../../../../public/assets/images/avatar.png';
import articleCommentAction from '../../../redux/actions/commentArticle';
import validation from '../validation';

export function CommentTextArea({
  image,
  username,
  commentId,
  articleCommentAction,
  slug,
  history,
  location,
}) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (parentCommentId) => {
    if (!localStorage.getItem('token')) {
      history.push(
        {
          pathname: '/login',
          state: { from: location },
        },
      );
      return;
    }
    const formData = parentCommentId ? { parentCommentId, body: inputValue } : { body: inputValue };
    const checkValidationError = validation(formData);
    if (checkValidationError) {
      const errors = {};
      (checkValidationError.details || []).forEach((err) => {
        errors[err.path[0]] = err.message.replace(/"/g, '');
      });
      const errorValue = Object.values(errors);
      setError(errorValue[0]);
      return false;
    }
    articleCommentAction(slug, formData);
    setInputValue('');
    setError('');
    return true;
  };
  return (
    <div className="listOfComments--textArea" style={style}>
      {image ? (
        <div className="commentTextAreaIcon">
          <img src={image || userIcone} alt="user icon" width="45px" height="40px" />
          <p>{username}</p>
        </div>
      ) : null}
      <textarea
        name="body"
        form="usrform"
        placeholder="Leave comment here..."
        onChange={({ target }) => setInputValue(target.value)}
        value={inputValue}
        style={{ height: '10px' }}
      />
      <p style={{ color: '#9f3a38' }}>
        {' '}
        {error || ''}
      </p>
      <button id="button" type="submit" onClick={() => handleSubmit(commentId)} value="Submit">
        comment
      </button>
    </div>
  );
}

CommentTextArea.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
  commentId: PropTypes.number,
  articleCommentAction: PropTypes.func.isRequired,
};
CommentTextArea.defaultProps = {
  image: '',
  username: '',
  commentId: 0,
};

const mapStateToProps = ({ data }) => ({
  data,
});
export default withRouter(connect(
  mapStateToProps,
  { articleCommentAction },
)(CommentTextArea));
