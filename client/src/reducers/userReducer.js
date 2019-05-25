import isEmpty from "../validation/is-empty";
import { SET_SETTINGS_USER,SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  settings: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
      case SET_SETTINGS_USER:
      return {
        ...state,
        // isAuthenticated: !isEmpty(action.payload),
        settings: action.payload
      };
    default:
      return state;
  }
}
