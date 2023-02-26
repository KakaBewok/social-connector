import axios from 'axios';
// import { alertAction } from '../alert/alertAction';
import { getProfile, profileError } from './profileSlice';
// import setAuthToken from '../../../utils/setAuthToken';

// Get current users profile
export const getCurrentProfileAction = () => async (dispatch) => {
  try {
    const url = '/api/profile/me';
    const res = await axios.get(url);

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
