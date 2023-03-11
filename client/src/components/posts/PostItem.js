/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  addLikeAction,
  removeLikeAction,
  deletePostAction,
} from '../../redux/features/post/postAction';
import { FcLike } from 'react-icons/fc';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const { _id, text, name, avatar, user, likes, comments, date } = post;
  const auth = useSelector((state) => state.authSlice);

  const handleLikes = (e) => {
    e.preventDefault();

    // memfilter apakah postingan sudah dilike atau belum
    let isLiked = likes.filter((like) => like.user === auth.user._id)[0];

    if (isLiked) {
      dispatch(removeLikeAction(_id));
    } else {
      dispatch(addLikeAction(_id));
    }
  };

  return (
    <>
      <div className="post bg-white p-1 my-1">
        {/* profile box */}
        <div>
          <Link to={`/profile/${user}`}>
            <img className="round-img" src={avatar} alt={name} />
            <h4>{name}</h4>
          </Link>
        </div>
        {/* post box */}
        <div>
          {/* post */}
          <p className="my-1">{text}</p>
          {/* post time */}
          <p className="post-date">
            Posted on <Moment format="DD MMM YYYY">{date}</Moment>
          </p>
          {/* button like*/}
          <button
            type="button"
            className="btn btn-light"
            onClick={(e) => handleLikes(e)}
          >
            <FcLike />
            {'  '}
            {likes.length > 0 && likes.length}
          </button>
          {/* comments, _id = id postingan */}
          <Link to={`/post/${_id}`} className="btn btn-primary">
            Discussion{' '}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {/* DELETE BUTTON. user = yang punya post, auth.user._id = user yang sedang login */}
          {!auth.loading && user === auth.user._id && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => dispatch(deletePostAction(_id))}
            >
              <i className="fas fa-times"></i>X
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PostItem;
