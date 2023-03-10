import axios from 'axios';
import { getPosts, postError } from './postSlice';
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
