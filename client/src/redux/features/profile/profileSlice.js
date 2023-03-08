import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  loading: true,
  error: {},
  profiles: [],
  repos: [],
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfile: (state, action) => {
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    },
    getProfiles: (state, action) => {
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    },
    getRepos: (state, action) => {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    },
    profileError: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
    // update experience and education
    updateProfile: (state, action) => {
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    },
    clearProfile: (state) => {
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProfile,
  getProfiles,
  getRepos,
  profileError,
  clearProfile,
  updateProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
