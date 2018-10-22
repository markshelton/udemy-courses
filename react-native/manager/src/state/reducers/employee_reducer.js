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
} from "../actions/types";

const INITIAL_STATE = { employees: {}, error: null, loading: null };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_EMPLOYEES_REQUEST:
    case CREATE_EMPLOYEE_REQUEST:
    case UPDATE_EMPLOYEE_REQUEST:
    case DELETE_EMPLOYEE_REQUEST:
      return { ...state, error: null, loading: true };
    case CREATE_EMPLOYEE_SUCCESS:
    case UPDATE_EMPLOYEE_SUCCESS:
    case DELETE_EMPLOYEE_SUCCESS:
      return { ...state, loading: false };
    case FETCH_EMPLOYEES_SUCCESS:
      return { ...state, employees: payload, loading: false };
    case EMPLOYEE_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
