import React, { Component } from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

import * as actions from "../../state/actions";
import { Spinner, Card } from "../common";
import EmployeeItem from "./EmployeeItem";

class EmployeeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Employees",
    headerRight: (
      <Button
        title="Add"
        onPress={() => navigation.navigate("EmployeeCreate")}
      />
    )
  });
  willFocus = this.props.navigation.addListener("willFocus", payload => {
    this.props.fetchEmployees();
  });
  renderEmployee(employee) {
    return <EmployeeItem item={employee.item} />;
  }
  render() {
    const { loading, employees } = this.props;
    if (loading) return <Spinner size="large" />;
    return (
      <Card>
        <FlatList
          data={employees}
          renderItem={this.renderEmployee}
          keyExtractor={({ uid }) => uid}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = ({ employee: { employees, loading } }) => ({
  employees: _.map(employees, (val, uid) => ({ ...val, uid })),
  loading
});

export default connect(
  mapStateToProps,
  actions
)(EmployeeList);
