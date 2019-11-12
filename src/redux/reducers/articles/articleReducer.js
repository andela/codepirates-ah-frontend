import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REPORTEDARTICLES_PENDING:
      return { ...state, readReportsPending: true };
    case actionTypes.REPORTEDARTICLES_SUCCESS:
      return {
        ...state,
        readReportsPending: false,
        reportedArticles: action.reportedArticles,
      };
    case actionTypes.REPORTEDARTICLES_ERROR:
      return {
        ...state,
        articleReportPending: false,
        readreportedArticlesError: action.readreportedArticlesError,
      };
    case actionTypes.REPORT_PENDING:
      return { ...state, articleReportPending: true };
    case actionTypes.REPORT_SUCCESS:
      return { ...state, articleReportPending: false, articleReportMessage: action.reportMessage };
    case actionTypes.REPORT_ERROR:
      return { ...state, articleReportPending: false, articleReportError: action.reportError };
    case actionTypes.DELETE_ARTICLE_SUCCESS:
      return { ...state, articleDeleted: true };
    case actionTypes.DELETE_ARTICLE_FAIL:
      return { ...state, articleDeleted: false };
    case actionTypes.RATE_ARTICLE_SUCCESS:
      return { ...state, articleRated: true };
    case actionTypes.RATE_ARTICLE_FAIL:
      return { ...state, articleRated: false };
    default:
      return state;
  }
};
export default ArticleReducer;
