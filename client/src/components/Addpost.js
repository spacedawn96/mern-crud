import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../action/index';

const Addpost = React.memo(() => {
  const renders = useRef(0);
  console.log('renders', renders.current++);
  const initialState = { title: '', content: '' };
  const [inputs, setFields] = useState(initialState);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleChange = event => {
    setFields({ ...inputs, [event.target.name]: event.target.value });
    console.log(inputs);
  };

  const handleSubmit = event => {
    if (!auth.isAuthenticated) {
      event.preventDefault();
      return;
    }
    event.preventDefault();

    const newpost = {
      title: inputs.title,
      content: inputs.content,
      user: auth.user.name
    };

    dispatch(addPost(newpost));
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
});

export default Addpost;
