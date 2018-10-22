import firebase from "firebase";

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  AUTH_ERROR
} from "./types";

export const loginUser = ({ email, password }) => async dispatch => {
  dispatch({ type: LOGIN_USER_REQUEST });
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
    dispatch(signupUser({ email, password }));
  }
};

export const signupUser = ({ email, password }) => async dispatch => {
  dispatch({ type: CREATE_USER_REQUEST });
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    dispatch({ type: CREATE_USER_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_ERROR, payload: error });
  }
};
