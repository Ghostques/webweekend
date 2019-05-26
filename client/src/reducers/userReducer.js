import { SET_SETTINGS_USER } from "../actions/types";

const initialState = {
  settings: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
      case SET_SETTINGS_USER:
      return {
        ...state,
        settings: action.payload
      };
    default:
      return state;
  }
}
