import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentAction } from '../../redux/features/post/postAction';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const CommentItem = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const { user, text, name, avatar, _id, date } = comment;
  const auth = useSelector((state) => state.authSlice);

  return (
    <>
      <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img className="round-img" src={avatar} alt={name} />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className="my-1">{text}</p>
          <p className="post-date">
            Posted on <Moment format="DD MMM YYYY">{date}</Moment>
          </p>
          {!auth.loading && user === auth.user._id && (
            <>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => dispatch(deleteCommentAction(postId, _id))}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentItem;
