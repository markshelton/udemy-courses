import { FETCH_ADMINS } from "../actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};
