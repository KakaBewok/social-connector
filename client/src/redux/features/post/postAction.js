import axios from 'axios';
import { getPosts, postError, updateLikes, deletePost } from './postSlice';
import { alertAction } from '../alert/alertAction';

//Get posts
export const getPostsAction = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');
    dispatch(getPosts(res.data));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

// add like, postId = id postingan yang akan dilike
export const addLikeAction = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${postId}`);
    dispatch(updateLikes({ postId, likes: res.data }));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

// remove like
export const removeLikeAction = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${postId}`);
    dispatch(updateLikes({ postId, likes: res.data }));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

// delete post
export const deletePostAction = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);
    dispatch(deletePost(postId));
    dispatch(alertAction('Post Removed', 'success'));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
