import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { post } from 'axios';
import { addPost } from '../action/index';

function Addpost(props) {
  const initialState = { title: '', content: '' };
  const [inputs, setFields] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = event => {
    setFields({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!inputs.title || !inputs.content) return;
    post('/api/post', { title: inputs.title, content: inputs.content })
      .then(response => {
        dispatch(addPost(response.data));
      })
      .catch(error => {
        console.log(error);
      });
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
