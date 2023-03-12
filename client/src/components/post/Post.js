/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPostAction } from '../../redux/features/post/postAction';
import { useParams } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { Link } from 'react-router-dom';
import Alert from '../layout/Alert';

const Post = () => {
  const { post, loading } = useSelector((state) => state.postSlice);

  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPostAction(postId));
  }, []);

  return (
    <>
      {loading || post === null ? (
        <div className="container">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="container">
            <Alert />
            <Link to="/posts" className="btn">
              Back to Posts
            </Link>
            <PostItem post={post} showAction={false} />
            <CommentForm postId={post._id} />
            <div className="comments">
              {/* postId yang dikirim ke commentItem untuk hit api menghapus comment */}
              {post.comments.map((comment) => (
                <CommentItem
                  key={comment._id}
                  comment={comment}
                  postId={post._id}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Post;
