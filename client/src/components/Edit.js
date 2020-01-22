import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { patch } from 'axios';
import { setPost, replacePost } from '../action/index';

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
    patch(`/api/post/${data._id}`, {
      title: data.title,
      content: data.content
    })
      .then(response => {
        dispatch(setPost(data));
        dispatch(replacePost(data));
      })
      .then(() => {
        props.history.push(`/post/${data._id}`);
      })
      .catch(error => {
        console.log(error);
      });
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
