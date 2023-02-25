import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './features/alert/alertSlice';
import authSlice from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    alertSlice,
    authSlice,
  },
});
