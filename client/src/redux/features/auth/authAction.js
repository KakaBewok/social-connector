import axios from 'axios';
import {
  registerSuccess,
  registerFailed,
  loginSuccess,
  loginFailed,
  logout,
  userLoaded,
  authError,
} from './authSlice';
import { clearProfile } from '../profile/profileSlice';
import { alertAction } from '../alert/alertAction';
import setAuthToken from '../../../utils/setAuthToken';
import { baseUrl } from '../../api/baseUrl';

// Register User
export const registerAction =
  ({ name, email, password }, navigate) =>
  async (dispatch) => {
    const url = `${baseUrl}/api/users`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post(url, body, config);
      //   res.data berupa token
      dispatch(registerSuccess(res.data));
      navigate('/login');
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
  const url = `${baseUrl}/api/auth`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
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

// Logout user / Clear profile
export const logoutAction = () => (dispatch) => {
  dispatch(clearProfile());
  dispatch(logout());
};

// Load User
export const loadUserAction = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const res = await axios.get(`${baseUrl}/api/auth`, config);

    dispatch(userLoaded(res.data));
  } catch (error) {
    dispatch(authError());
  }
};
