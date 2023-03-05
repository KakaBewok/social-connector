import axios from 'axios';
import { getProfile, profileError } from './profileSlice';
import { alertAction } from '../alert/alertAction';
import { updateProfile } from './profileSlice';

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

// Create or update profile
export const createProfileAction =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const url = '/api/profile';
      // hasil dari request ini berupa object yang berisi profile
      const res = await axios.post(url, formData, config);

      // setelah membuat profile lalu akan langsung meng get profile tersebut
      dispatch(getProfile(res.data));

      let notif = edit ? 'Profile Updated' : 'Profile Created';

      dispatch(alertAction(notif, 'success'));

      if (!edit) {
        navigate('/dashboard');
      }
    } catch (err) {
      const errors = err.response.data.errors;

      //   jika error karena validasi from
      if (errors) {
        errors.forEach((error) => dispatch(alertAction(error.msg, 'danger')));
      }

      dispatch(
        profileError({
          msg: err.response.statusText,
          status: err.response.status,
        })
      );
    }
  };

// Profile update (experience)
export const addExperienceAction = (formData, navigate) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const url = '/api/profile/experience';
    const res = await axios.put(url, formData, config);

    dispatch(updateProfile(res.data));

    dispatch(alertAction('Experience Added', 'success'));

    navigate('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    //   jika error karena validasi from
    if (errors) {
      errors.forEach((error) => dispatch(alertAction(error.msg, 'danger')));
    }

    dispatch(
      profileError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

// Profile update (education)
export const addEducationAction = (formData, navigate) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const url = '/api/profile/education';
    const res = await axios.put(url, formData, config);

    dispatch(updateProfile(res.data));

    dispatch(alertAction('Education Added', 'success'));

    navigate('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    //   jika error karena validasi from
    if (errors) {
      errors.forEach((error) => dispatch(alertAction(error.msg, 'danger')));
    }

    dispatch(
      profileError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};
