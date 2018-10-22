import React from "react";
import { renderRoutes } from "react-router-config";

import Header from "./components/Header";
import * as actions from "./actions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

const component = App;
const loadData = ({ dispatch }) => dispatch(actions.fetchCurrentUser());
export default { component, loadData };
