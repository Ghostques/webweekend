import { GET_TODOS, SET_TODO } from "../actions/types";

const initialState = {
  todo: null,
  todos: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case SET_TODO:
      return {
        ...state,
        todo: action.payload
      };
    default:
      return state;
  }
}
