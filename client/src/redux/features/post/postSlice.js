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
    getPost: (state, action) => {
      return {
        ...state,
        post: action.payload,
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
    updateLikes: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };
    },
    deletePost: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };
    },
    addPost: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };
    },
    addComment: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false,
      };
    },
    deleteComment: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getPosts,
  getPost,
  postError,
  updateLikes,
  deletePost,
  addPost,
  addComment,
  deleteComment,
} = postSlice.actions;

export default postSlice.reducer;
