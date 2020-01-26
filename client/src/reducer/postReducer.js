import {
  SET_POSTS,
  ADD_POST,
  REMOVE_POST,
  REPLACE_POST
} from '../action/index';

const init = {
  post: []
};

export default function(state = init, action) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    case ADD_POST:
      return [action.post, ...state];
    case REMOVE_POST:
      return state.filter(post => post._id !== action.payload._id);
    case REPLACE_POST:
      return state.map(post => {
        if (post._id === action.post._id) {
          return {
            ...post,
            title: action.post.title,
            content: action.post.content
          };
        } else return post;
      });
    default:
      return state;
  }
}
