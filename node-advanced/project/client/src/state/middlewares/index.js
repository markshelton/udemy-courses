import { applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

const rootMiddleware = applyMiddleware(reduxThunk);

export default rootMiddleware;
