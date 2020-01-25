import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { patch } from 'axios';
import { setPost, replacePost } from '../action/index';
import axios from 'axios';

function Edit(props) {
  const initialState = useSelector(state => state.pos);
  let [data, changedata] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = event => {
    changedata({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!data.title || !data.content) return;

    dispatch(setPost(data));
    dispatch(replacePost(data));

    props.history.push(`/post/${data._id}`);
  };

  const handleCancel = () => {
    props.history.push(`/post/${data._id}`);
  };

  return (
    <div>
      <h1>Edit {data.title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            defaultValue={data.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            name="content"
            rows="3"
            defaultValue={data.content}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Update</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
