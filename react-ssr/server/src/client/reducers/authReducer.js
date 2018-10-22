import { FETCH_CURRENT_USER } from "../actions";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};
