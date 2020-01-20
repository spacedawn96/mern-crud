import {
  SET_POSTS,
  ADD_POST,
  REMOVE_POST,
  REPLACE_POST
} from '../action/index';

const initialState = { post: [] };
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return action.post;
    case ADD_POST:
      return [action.payload, ...state];
    case REMOVE_POST:
      return state.filter(payload => payload._id !== action._id);
    case REPLACE_POST:
      return state.map(payload => {
        if (payload._id === action.payload._id) {
          return {
            ...payload,
            title: action.payload.title,
            content: action.payload.content
          };
        } else return payload;
      });
    default:
      return state;
  }
}
