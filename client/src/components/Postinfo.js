import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { setPost, removePost } from '../action/index';

function Postinfo(props) {
  const pos = useSelector(state => state.pos);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/api/post/${props.match.params._id}`)
      .then(response => {
        dispatch(setPost(response.data));
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [dispatch, props]);
  const handleDelete = () => {
    axios
      .delete(`/api/post/${pos._id}`)
      .then(() => {
        dispatch(removePost(pos._id));
        props.history.push('/');
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <div>
      <h2>{pos.title}</h2>
      <small>id: {pos._id}</small>
      <p>{pos.content}</p>
      <div>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <Link to={{ pathname: `/post/${pos._id}/edit` }}>
          <button>Edit </button>
        </Link>
        <Link to="/">
          <button>Close </button>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Postinfo;
