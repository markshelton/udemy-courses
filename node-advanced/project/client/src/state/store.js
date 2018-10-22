import { createStore } from "redux";

import rootReducer from "./reducers";
import rootMiddleware from "./middlewares";

const initialState = {};

const store = createStore(rootReducer, initialState, rootMiddleware);

export default store;
