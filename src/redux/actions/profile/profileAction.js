import * as actionType from '../actionTypes';

export function fetchProfilePending() {
  return {
    type: actionType.FETCH_PROFILE_PENDING,
  };
}

export function fetchProfileSuccess(profile) {
  return {
    type: actionType.FETCH_PROFILE_SUCCESS,
    profile,
  };
}

export function fetchProfileError(error) {
  return {
    type: actionType.FETCH_PROFILE_ERROR,
    error,
  };
}

export function updateProfilePending() {
  return {
    type: actionType.UPDATE_PROFILE_PENDING,
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: actionType.UPDATE_PROFILE_SUCCESS,
    profile,
  };
}

export function updateProfileError(error) {
  return {
    type: actionType.UPDATE_PROFILE_ERROR,
    error,
  };
}

export function fetchreadReportsPending() {
  return {
    type: actionType.REPORTEDARTICLES_PENDING,
  };
}

export function fetchreadReportsSuccess(payload) {
  return {
    type: actionType.REPORTEDARTICLES_SUCCESS,
    reportedArticles: payload,
  };
}

export function fetchreadReportsError(payload) {
  return {
    type: actionType.REPORTEDARTICLES_ERROR,
    readreportedArticlesError: payload,
  };
}
