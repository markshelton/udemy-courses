// Startup point for the client side application
// Only runs on the browser
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";

import Routes from "./Routes";
import reducers from "./reducers";

const initialState = window.INITIAL_STATE;
const axiosInstance = axios.create({ baseURL: "/api" });
const thunkMiddleware = thunk.withExtraArgument(axiosInstance);
const middleware = [thunkMiddleware];
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

//similar to ReactDOM.render, just more efficient for this purpose
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
