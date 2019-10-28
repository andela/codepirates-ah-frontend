import * as actionType from '../actionTypes';

export function fetchClapPending() {
  return {
    type: actionType.CLAP_PENDING,
  };
}

export function fetchClapSuccess(claps) {
  return {
    type: actionType.CLAP_SUCCESS,
    claps,
  };
}

export function fetchClapError(error) {
  return {
    type: actionType.CLAP_ERROR,
    error,
  };
}

export function fetchDislikePending() {
  return {
    type: actionType.DISLIKE_PENDING,
  };
}

export function fetchDislikeSuccess(dislikes) {
  return {
    type: actionType.DISLIKE_SUCCESS,
    dislikes,
  };
}

export function fetchDislikeError(error) {
  return {
    type: actionType.DISLIKE_ERROR,
    error,
  };
}
