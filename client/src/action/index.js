import { get } from 'axios';

export const SET_POSTS = 'SET_POST';
export const ADD_POST = 'ADD_POST';
export const SET_POST = 'SET_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const REPLACE_POST = 'REPLACE_POST';

export const setPosts = () => dispatch => {
  return get('/api/post')
    .then(response => {
      dispatch({ type: SET_POSTS, post: response.data });
    })
    .catch(error => {
      console.log('error', error);
    });
};

export const addPost = post => {
  return {
    type: ADD_POST,
    payload: post
  };
};

export const setPost = post => {
  return {
    type: SET_POST,
    payload: post
  };
};

export const removePost = _id => {
  return {
    type: REMOVE_POST,
    _id: _id
  };
};

export const replacePost = post => {
  return {
    type: REPLACE_POST,
    payload: post
  };
};
