import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const PostItem = ({ post }) => {
  const { _id, text, name, avatar, user, likes, comments, date } = post;

  //   const dispatch = useDispatch();
  const auth = useSelector((state) => state.authSlice);

  return (
    <>
      <div class="post bg-white p-1 my-1">
        {/* profile box */}
        <div>
          <a href="profile.html">
            <img class="round-img" src={avatar} alt={name} />
            <h4>{name}</h4>
          </a>
        </div>
        {/* post box */}
        <div>
          {/* post */}
          <p class="my-1">{text}</p>
          {/* post time */}
          <p class="post-date">
            Posted on <Moment format="DD MMM YYYY">{date}</Moment>
          </p>
          {/* button like*/}
          <button type="button" class="btn btn-light">
            <FiThumbsUp />
            {'  '}
            {likes.length > 0 && likes.length}
          </button>
          {/* button unlike */}
          <button type="button" class="btn btn-light">
            <FiThumbsDown />
            {'   '}9
          </button>
          {/* comments, _id = id postingan */}
          <Link to={`/post/${_id}`} class="btn btn-primary">
            Discussion{' '}
            {comments.length > 0 && (
              <span class="comment-count">{comments.length}</span>
            )}
          </Link>
          {/* DELETE BUTTON. user = yang punya post, auth.user._id = user yang sedang login */}
          {!auth.loading && user === auth.user._id && (
            <button type="button" class="btn btn-danger">
              <i class="fas fa-times"></i>X
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PostItem;
