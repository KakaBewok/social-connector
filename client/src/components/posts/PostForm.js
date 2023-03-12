import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostAction } from '../../redux/features/post/postAction';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const submitPost = (e) => {
    e.preventDefault();

    dispatch(addPostAction({ text }));
    setText('');
  };

  return (
    <>
      <div className="post-form">
        <div className="bg-primary p">
          <h3>Say Something...</h3>
        </div>
        <form className="form my-1" onSubmit={(e) => submitPost(e)}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
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

export default PostForm;
