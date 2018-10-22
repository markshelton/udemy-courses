import firebase from "firebase";

import { NavigationService } from "../../services/navigation";

import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  EMPLOYEE_ERROR
} from "./types";

export const fetchEmployees = () => async dispatch => {
  dispatch({ type: FETCH_EMPLOYEES_REQUEST });
  try {
    const { currentUser } = firebase.auth();
    const snapshot = await firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .once("value");
    const employees = snapshot.val();
    dispatch({ type: FETCH_EMPLOYEES_SUCCESS, payload: employees });
  } catch (error) {
    console.log(error);
    dispatch({ type: EMPLOYEE_ERROR });
  }
};

export const createEmployee = ({ name, phone, shift }) => async dispatch => {
  dispatch({ type: CREATE_EMPLOYEE_REQUEST });
  try {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift });
    dispatch({ type: CREATE_EMPLOYEE_SUCCESS });
    NavigationService.navigate("EmployeeList");
  } catch (error) {
    console.log(error);
    dispatch({ type: EMPLOYEE_ERROR });
  }
};

export const editEmployee = ({ uid, name, phone, shift }) => async dispatch => {
  dispatch({ type: UPDATE_EMPLOYEE_REQUEST });
  try {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .update({ name, phone, shift });
    dispatch({ type: UPDATE_EMPLOYEE_SUCCESS });
    NavigationService.navigate("EmployeeList");
  } catch (error) {
    console.log(error);
    dispatch({ type: EMPLOYEE_ERROR });
  }
};

export const deleteEmployee = ({ uid }) => async dispatch => {
  dispatch({ type: DELETE_EMPLOYEE_REQUEST });
  try {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove();
    dispatch({ type: DELETE_EMPLOYEE_SUCCESS });
    NavigationService.navigate("EmployeeList");
  } catch (error) {
    console.log(error);
    dispatch({ type: EMPLOYEE_ERROR });
  }
};
