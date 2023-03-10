import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './features/alert/alertSlice';
import authSlice from './features/auth/authSlice';
import profileSlice from './features/profile/profileSlice';
import postSlice from './features/post/postSlice';

export const store = configureStore({
  reducer: {
    alertSlice,
    authSlice,
    profileSlice,
    postSlice,
  },
});
