import axios from 'axios';
import {
  registerSuccess,
  registerFailed,
  loginSuccess,
  loginFailed,
  userLoaded,
  authError,
} from './authSlice';
import { alertAction } from '../alert/alertAction';
import setAuthToken from '../../../utils/setAuthToken';

// Register User
export const registerAction =
  ({ name, email, password }) =>
  async (dispatch) => {
    const url = '/api/users';
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post(url, body, config);
      //   res.data berupa token
      dispatch(registerSuccess(res.data));
    } catch (err) {
      const errors = err.response.data.errors;

      //   jika error karena validasi from
      if (errors) {
        errors.forEach((error) => dispatch(alertAction(error.msg, 'danger')));
      }

      dispatch(registerFailed());
    }
  };

// Login User
export const loginAction = (email, password) => async (dispatch) => {
  const url = '/api/auth';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(url, body, config);
    //   res.data berupa token
    dispatch(loginSuccess(res.data));

    // mengambil data user
    dispatch(loadUserAction());
  } catch (err) {
    const errors = err.response.data.errors;

    //   jika error karena validasi from
    if (errors) {
      errors.forEach((error) => dispatch(alertAction(error.msg, 'danger')));
    }

    dispatch(loginFailed());
  }
};

// Load User
export const loadUserAction = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch(userLoaded(res.data));
  } catch (error) {
    dispatch(authError());
  }
};
