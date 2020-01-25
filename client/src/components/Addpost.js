import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { post } from 'axios';
import { addPost } from '../action/index';

import { tokenConfig } from '../action/authActions';

function Addpost(props) {
  const initialState = { title: '', content: '' };
  const [inputs, setFields] = useState(initialState);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleChange = event => {
    setFields({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newpost = {
      title: inputs.title,
      content: inputs.content,
      user: auth.user
    };

    dispatch(addPost(newpost));

    console.log(newpost);
  };

  return (
    <div>
      <h4>Add post</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            required
            value={inputs.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            name="content"
            rows="5"
            required
            value={inputs.content}
            onChange={handleChange}
            placeholder="Content"
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Addpost;
