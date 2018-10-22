import { combineReducers } from "redux";

import authReducer from "./auth_reducer";
import employeeReducer from "./employee_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  employee: employeeReducer
});

export default rootReducer;
