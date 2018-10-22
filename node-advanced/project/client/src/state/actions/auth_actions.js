import axios from "../services/axios";

import { FETCH_USER } from "../types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginGoogle = () => async dispatch => {
  const res = await axios.get(`/auth/google`);
  console.log(res);
};

export const logout = () => async dispatch => {
  const res = await axios.get(`/auth/logout`);
  console.log(res);
};
