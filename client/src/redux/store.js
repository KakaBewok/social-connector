import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './features/alert/alertSlice';

export const store = configureStore({
  reducer: {
    alertSlice,
  },
});
