import axios from "axios";
import {  SET_SETTINGS_USER, SET_CURRENT_USER } from "./types";

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
};
export const addressInfo = userData => dispatch => {
  axios
    .post("/api/user/address/add", userData)
    .then(res => {
      const { data } = res;
      dispatch({
          type: SET_SETTINGS_USER,
          payload: data
        }
      );
    })

};
