import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

import currentUserQuery from "../queries/CurrentUser";

export default WrappedComponent => {
  class RequireAuth extends Component {
    componentDidUpdate() {
      if (!this.props.data.loading && !this.props.data.user) {
        hashHistory.push("/login");
      }
    }
    render() {
      if (this.props.data.user) {
        return <WrappedComponent {...this.props} />;
      } else return <div />;
    }
  }
  return graphql(currentUserQuery)(RequireAuth);
};
