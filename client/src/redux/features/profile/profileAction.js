import axios from 'axios';
import { getProfile, profileError } from './profileSlice';

// Get current users profile
export const getCurrentProfileAction = () => async (dispatch) => {
  try {
    const url = '/api/profile/me';
    const res = await axios.get(url);

    // res.data isinya data profile yang login
    dispatch(getProfile(res.data));
  } catch (err) {
    dispatch(
      profileError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
