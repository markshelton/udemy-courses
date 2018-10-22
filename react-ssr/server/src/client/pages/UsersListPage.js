import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import * as actions from "../actions";

class UsersList extends Component {
  componentDidMount = () => {
    this.props.fetchUsers();
  };
  renderUsers = () => {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  };
  head = () => {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  };
  render = () => (
    <div>
      {this.head()}
      Here's a big list of users:
      <ul>{this.renderUsers()}</ul>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({ users });
const component = connect(mapStateToProps, actions)(UsersList);
const loadData = ({ dispatch }) => dispatch(actions.fetchUsers());
export default { component, loadData };
