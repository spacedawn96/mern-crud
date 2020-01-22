import { get } from 'axios';

export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';
export const SET_POST = 'SET_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const REPLACE_POST = 'REPLACE_POST';

export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const setPosts = () => dispatch => {
  get('/api/post')
    .then(response => {
      dispatch({ type: SET_POSTS, posts: response.data });
    })
    .catch(function(error) {
      console.log('error', error);
    });
};

export const addPost = data => {
  return {
    type: ADD_POST,
    post: data
  };
};

export const setPost = data => {
  return {
    type: SET_POST,
    post: data
  };
};

export const removePost = _id => {
  return {
    type: REMOVE_POST,
    _id: _id
  };
};

export const replacePost = data => {
  return {
    type: REPLACE_POST,
    post: data
  };
};
