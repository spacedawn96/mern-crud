import { get } from 'axios';
import { tokenConfig } from '../action/authActions';
import axios from 'axios';

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

export const addPost = data => (dispatch, getState) => {
  axios.post('/api/post', data, tokenConfig(getState)).then(res =>
    dispatch({
      type: ADD_POST,
      post: res.data
    })
  );
};

export const setPost = data => (dispatch, getState) => {
  axios.get(`/api/post/${data._id}`, data, tokenConfig(getState)).then(res => {
    dispatch({
      type: SET_POST,
      post: res.data
    });
  });
};

export const removePost = deluser => (dispatch, getState) => {
  axios.delete(`/api/post/${deluser._id}`, tokenConfig(getState)).then(() => {
    if (deluser.userdel == deluser.authdel) {
      dispatch({
        type: REMOVE_POST,
        payload: deluser
      });
    }
  });
};

export const replacePost = data => (dispatch, getState) => {
  axios.patch(`/api/post/${data._id}`, data, tokenConfig(getState)).then(() =>
    dispatch({
      type: REPLACE_POST,
      post: data
    })
  );
};
