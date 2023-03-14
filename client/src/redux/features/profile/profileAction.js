/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  getProfile,
  getProfiles,
  getRepos,
  profileError,
  updateProfile,
  clearProfile,
} from './profileSlice';
import { alertAction } from '../alert/alertAction';
import { accountDeleted } from '../auth/authSlice';

// Get current users profile
export const getCurrentProfileAction = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const url = `/api/profile/me`;
    const res = await axios.get(url, config);

    // res.data isinya data profile yang login
    dispatch(getProfile(res.data));
  } catch (err) {
    // jika user baru belum ada profile, maka akan menghapus profile yang lama distate
    dispatch(profileError());

    dispatch(
      profileError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

// Get all profiles
export const getProfilesAction = () => async (dispatch) => {
  dispatch(clearProfile);
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const url = `/api/profile`;
    const res = await axios.get(url, config);

    // res.data isinya semua data profile
    dispatch(getProfiles(res.data));
  } catch (err) {
    dispatch(
      profileError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

// Get profile by ID
export const getProfileByIDAction = (userID) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const url = `/api/profile/user/${userID}`;
    const res = await axios.get(url, config);

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

// Get github repos
export const getGithubReposAction = (githubUsername) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const url = `/api/profile/github/${githubUsername}`;
    const res = await axios.get(url, config);

    dispatch(getRepos(res.data));
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
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      };
      const url = `/api/profile`;
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
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const url = `/api/profile/experience`;
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
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const url = `/api/profile/education`;
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

// Delete experience
export const deleteExperienceAction = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const url = `/api/profile/experience/${id}`;
    const res = await axios.delete(url, config);

    dispatch(updateProfile(res.data));

    dispatch(alertAction('Delete Success', 'success'));
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

// Delete education
export const deleteEducationAction = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    };
    const url = `/api/profile/education/${id}`;
    const res = await axios.delete(url, config);

    dispatch(updateProfile(res.data));

    dispatch(alertAction('Delete Success', 'success'));
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

// Delete account & profile
export const deleteAccountAction = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can't be undone! ")) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      };
      const url = `/api/profile`;
      await axios.delete(url, config);

      dispatch(clearProfile());
      dispatch(accountDeleted());

      dispatch(alertAction('Your account has been deleted'));
    } catch (err) {
      dispatch(
        profileError({
          msg: err.response.statusText,
          status: err.response.status,
        })
      );
    }
  }
};
