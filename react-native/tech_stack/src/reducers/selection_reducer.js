import { SELECT_LIBRARY } from "./../actions/types";

export default (state = null, { type, payload }) => {
  switch (type) {
    case SELECT_LIBRARY:
      return payload;
    default:
      return state;
  }
};
