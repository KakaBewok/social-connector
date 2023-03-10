import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPosts: (state, action) => {
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    },
    postError: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getPosts, postError } = postSlice.actions;

export default postSlice.reducer;
