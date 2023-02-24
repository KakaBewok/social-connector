import { v4 as uuidv4 } from 'uuid';
import { setAlert, removeAlert } from './alertSlice';

export const alertAction = (msg, alertType, timeout = 5000) => {
  return (dispatch) => {
    const id = uuidv4();
    dispatch(setAlert({ msg, alertType, id }));

    // remove alert
    setTimeout(() => {
      dispatch(removeAlert(id));
    }, timeout);
  };
};
