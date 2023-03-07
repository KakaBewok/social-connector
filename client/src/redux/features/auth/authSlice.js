import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        loading: false,
      };
    },
    registerFailed: (state) => {
      return {
        ...state,
        token: null,
        loading: false,
      };
    },
    loginSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    },
    loginFailed: (state) => {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
    logout: (state) => {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    },
    userLoaded: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
      // }
    },
    authError: (state) => {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
    accountDeleted: (state) => {
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  registerSuccess,
  registerFailed,
  loginSuccess,
  loginFailed,
  logout,
  userLoaded,
  authError,
  accountDeleted,
} = authSlice.actions;

export default authSlice.reducer;
