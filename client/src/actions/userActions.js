import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {  SET_SETTINGS_USER, SET_CURRENT_USER } from "./types";
import {setCurrentUser} from "./authActions";

export const baseInfo = userData => dispatch => {
  axios
    .post("/api/user/name/add", userData)
    .then(res => {
      const { data } = res;
      dispatch({
          type: SET_SETTINGS_USER,
          payload: data
        }
      );
    })
    // .catch(err => dispatch({ type: SET_SETTINGS_USER, payload: err.response.data }));
};
export const addressInfo = userData => dispatch => {
  axios
    .post("/api/user/address/add", userData)
    .then(data=>data);
    dispatch( {
      type: SET_SETTINGS_USER,
      payload: 'decoded'
    })

    // .catch(err => dispatch({ type: SET_SETTINGS_USER, payload: err.response.data }));
};
