import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// export const registerUser = (userData, history) => dispatch => {
//   axios
//     .post("/api/users/register/user", userData)
//     .then(() => history.push("/login"))
//     .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
// };

export const addUser = userData => {
  axios
    .post("/api/user/name/add", userData)
    .then(data=>data)
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};