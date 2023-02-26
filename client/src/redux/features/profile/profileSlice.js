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
    profileError: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProfile, profileError } = profileSlice.actions;

export default profileSlice.reducer;
