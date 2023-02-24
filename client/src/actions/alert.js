// import { v4 as uuidv4 } from 'uuid';
// import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// export const setAlert = (msg, alertType, timeout = 5000) => {
//   return (dispatch) => {
//     const id = uuidv4();
//     dispatch({
//       type: SET_ALERT,
//       payload: { msg, alertType, id },
//     });

//     // remove alert
//     setTimeout(() => {
//       dispatch({
//         type: REMOVE_ALERT,
//         payload: id,
//       });
//     }, timeout);
//   };
// };
