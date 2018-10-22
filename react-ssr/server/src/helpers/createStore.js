import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import reducers from "../client/reducers";

const API_URL = "http://react-ssr-api.herokuapp.com";

export default req => {
  const initialState = {};
  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: { cookie: req.get("cookie") || "" }
  });
  const thunkMiddleware = thunk.withExtraArgument(axiosInstance);
  const middleware = [thunkMiddleware];
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
  );
  return store;
};
