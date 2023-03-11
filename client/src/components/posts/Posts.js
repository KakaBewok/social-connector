/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../redux/features/post/postAction';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem.js';
import Alert from '../layout/Alert';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.postSlice);

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return loading ? (
    <div className="container">
      <Spinner />
    </div>
  ) : (
    <>
      <div className="container">
        <Alert />
        <h1 className="large text-primary">Posts</h1>
        <p className="lead">Welcome to the community</p>
        {/* Post Form */}
        <div className="posts">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
