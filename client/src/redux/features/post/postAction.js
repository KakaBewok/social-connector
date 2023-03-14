import axios from 'axios';
import {
  getPosts,
  getPost,
  postError,
  updateLikes,
  deletePost,
  addPost,
  addComment,
  deleteComment,
} from './postSlice';
import { alertAction } from '../alert/alertAction';
import { baseUrl } from '../../api/baseUrl';

//Get posts
export const getPostsAction = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/api/posts`);
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

//Get post
export const getPostAction = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/api/posts/${postId}`);
    dispatch(getPost(res.data));
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
    const res = await axios.put(`${baseUrl}/api/posts/like/${postId}`);
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
    const res = await axios.put(`${baseUrl}/api/posts/unlike/${postId}`);
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
    await axios.delete(`${baseUrl}/api/posts/${postId}`);
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

// add post
export const addPostAction = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(`${baseUrl}/api/posts`, formData, config);

    dispatch(addPost(res.data));

    dispatch(alertAction('Post Created', 'success'));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

// add comment
export const addCommentAction = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      `${baseUrl}/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch(addComment(res.data));

    dispatch(alertAction('Comment Added', 'success'));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

// delete comment
export const deleteCommentAction = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`${baseUrl}/api/posts/comment/${postId}/${commentId}`);
    dispatch(deleteComment(commentId));
    dispatch(alertAction('Comment Removed', 'success'));
  } catch (err) {
    dispatch(
      postError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
