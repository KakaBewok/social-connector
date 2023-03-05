import axios from 'axios';
import { getProfile, profileError } from './profileSlice';
// import { setAlert } from '../alert/alertSlice';
import { alertAction } from '../alert/alertAction';

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
  // const navigate = useNavigate();
  async (dispatch) => {
    // const navigate = useNavigate();
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
