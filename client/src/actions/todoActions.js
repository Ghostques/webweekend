import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_TODOS, SET_TODO, DELETE_TODO, GET_ERRORS } from "./types";

export const getTodos = () => dispatch => {
  axios
    .get("/api/todos")
    .then(res => dispatch({ type: GET_TODOS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: {} }));
};
export const addTodo = todoData => dispatch => {
  axios
    .post("api/todos", todoData)
    .then(res => dispatch({ type: GET_TODOS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: {} }));
};
export const deleteTodo = id => dispatch => {
  axios
    .delete(`api/todos/${id}`)
    .then(res => dispatch({ type: GET_TODOS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: {} }));
};
