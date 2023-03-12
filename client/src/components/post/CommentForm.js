import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCommentAction } from '../../redux/features/post/postAction';

const CommentForm = ({ postId }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submitComment = (e) => {
    e.preventDefault();

    dispatch(addCommentAction(postId, { text }));
    setText('');
  };

  return (
    <>
      <div className="post-form">
        <div className="bg-primary p">
          <h3>Leave a Comment</h3>
        </div>
        <form className="form my-1" onSubmit={(e) => submitComment(e)}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default CommentForm;
