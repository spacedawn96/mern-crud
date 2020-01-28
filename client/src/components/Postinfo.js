import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { setPost, removePost } from '../action/index';

function Postinfo(props) {
  const pos = useSelector(state => state.pos);
  const posts = useSelector(state => state.posts);
  const auth = useSelector(state => state.auth);
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

  function handleDelete() {
    const deluser = {
      _id: pos._id,
      userdel: pos.user,
      authdel: auth.user.name
    };
    dispatch(removePost(deluser));
    console.log(auth);
    props.history.push('/');
  }

  const authuser = (
    <div>
      {auth.isAuthenticated ? (
        <div>
          {pos.user == auth.user.name ? (
            <div>
              <button type="button" onClick={handleDelete}>
                Delete
              </button>
              <Link to={{ pathname: `/post/${pos._id}/edit` }}>
                <button>Edit </button>
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
  return (
    <div>
      <h2>{pos.title}</h2>
      <small>id: {pos._id}</small>
      <p>{pos.content}</p>
      <div>
        {authuser}
        <Link to="/">
          <button>Close </button>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Postinfo;
