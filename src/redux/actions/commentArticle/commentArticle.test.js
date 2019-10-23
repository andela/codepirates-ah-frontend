import allArticleCommentsAction, {
  commentAnArticleActionCreatorSuccess,
  commentAnArticleActionCreatorError,
} from '.';
import { fetchSuccesUtil } from '../../../__mocks__/window';

const token = localStorage.getItem('token');
const dispatch = jest.fn(() => ({ data: {} }));
describe('CREATE A COMMENT', () => {
  const data = {
    data: {
      articleSlug:
        'You-can-host-documentation-for-your-repository-in-a-wiki-so-that-others-can-use-and-contribute-to-your-project-5fn22zk2exrigy',
      body: 'comment again ',
      commentRevisions: null,
      createdAt: '2019-11-05T04:54:57.075Z',
      id: 17,
      likeInfo: '',
      likesCount: 0,
      parentCommentId: null,
      updatedAt: '2019-11-05T04:54:57.075Z',
      userId: 3,
    },

    message: 'Comment successfully created',
    status: 'success',
  };
  const error = {
    status: 'error',
    message: 'body should not be empty',
  };
  it('should test comment page action creator on sucess', () => {
    const action = commentAnArticleActionCreatorSuccess(data);
    expect(action.payload).toEqual(data);
  });
  it('should test comment page creator on failure', () => {
    const action = commentAnArticleActionCreatorError(error);
    expect(action.payload).toEqual(error);
  });
  it('Should test async create article action success', async () => {
    const slug = 'You-can-host-documentation-for-your-repository-in-a-wiki-so-that-others-can-use-and-contribute-to-your-project-5fn22zk2exrigy';
    const input = {
      body: 'comment here',
    };
    window.fetch = fetchSuccesUtil;
    await allArticleCommentsAction(slug, input)(dispatch, token);
  });
});
