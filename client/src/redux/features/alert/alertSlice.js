import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      const { payload } = action;
      return [...state, payload];
    },
    removeAlert: (state, action) => {
      const { payload } = action;
      return state.filter((alert) => alert.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
