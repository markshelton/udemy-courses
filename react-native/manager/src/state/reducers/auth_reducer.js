import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  AUTH_ERROR
} from "../actions/types";

const INITIAL_STATE = { user: null, error: null, loading: null };

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
    case CREATE_USER_REQUEST:
      return { ...state, error: null, loading: true };
    case LOGIN_USER_SUCCESS:
    case CREATE_USER_SUCCESS:
      return { ...state, user: payload, loading: false };
    case AUTH_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
