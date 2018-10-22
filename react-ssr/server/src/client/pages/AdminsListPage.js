import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class AdminsList extends Component {
  componentDidMount = () => {
    this.props.fetchAdmins();
  };
  renderAdmins = () => {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  };
  render = () => (
    <div>
      Protected list of admins:
      <ul>{this.renderAdmins()}</ul>
    </div>
  );
}

const mapStateToProps = ({ admins }) => ({ admins });
const component = connect(mapStateToProps, actions)(requireAuth(AdminsList));
const loadData = ({ dispatch }) => dispatch(actions.fetchAdmins());
export default { component, loadData };
