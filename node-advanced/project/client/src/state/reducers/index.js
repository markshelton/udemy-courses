import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "./auth_reducer";
import blogsReducer from "./blogs_reducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  blogs: blogsReducer
});
