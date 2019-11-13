import * as actionTypes from '../../../actions/actionTypes';
import initialState from '../../../store/initialState';

const LikeDislikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIKE_A_COMMENT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.LIKE_A_COMMENT_ERROR:
      return { ...state, ...action.payload };
    case actionTypes.FETCH_LIKES_SUCCESS:
      return {
        ...state,
        counts: [...state.counts,
          {
            commentId: action.payload.commentId,
            likesCount: action.payload.data ? action.payload.data.data.likesCount : 0,
            formattedLikeInfo: action.payload.data ? action.payload.data.data.likeInfo : '',
          }],
      };
    case actionTypes.FETCH_LIKES_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default LikeDislikeReducer;
