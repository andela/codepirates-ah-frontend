import {
  UPDATE_ARTICLE_FAILURE,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_EDIT_MODE,
} from '../actionTypes';

export const successfulUpdate = () => ({
  type: UPDATE_ARTICLE_SUCCESS,
  payload: { success: true, error: false },
});

export const failedUpdate = () => ({
  type: UPDATE_ARTICLE_FAILURE,
  payload: { error: true, success: false },
});

export const setEditMode = (updated) => ({
  type: UPDATE_EDIT_MODE,
  payload: { editmode: !updated },
});

export const setEditModeAction = (updated = false) => (dispatch) => dispatch(setEditMode(updated));

export const updateArticleAction = (status) => (dispatch) => (status === 200 || status === 'success'
  ? dispatch(successfulUpdate())
  : dispatch(failedUpdate()));

