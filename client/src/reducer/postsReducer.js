import { SET_POST } from '../action/index';

export default function postsReducer(state = {}, action) {
  switch (action.type) {
    case SET_POST:
      return action.post;
    default:
      return state;
  }
}
