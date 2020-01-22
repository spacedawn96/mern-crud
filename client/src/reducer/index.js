import { combineReducers } from 'redux';
import postReducer from './postReducer';
import postsReducer from './postsReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  posts: postReducer,
  pos: postsReducer,
  error: errorReducer,
  auth: authReducer
});
