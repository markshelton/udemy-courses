import React, { Component } from "react";
import { Text, Picker, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { Button, Card, CardSection, Input, Spinner } from "../common";
import * as actions from "../../state/actions";

const INITIAL_STATE = { uid: null, name: "", phone: "", shift: "Monday" };

class EmployeeCreate extends Component {
  state = INITIAL_STATE;
  handleSave() {
    const { name, phone, shift } = this.state;
    this.props.createEmployee({ name, phone, shift });
  }
  handleCancel() {
    this.props.navigation.goBack();
  }
  renderError() {
    const { error } = this.props;
    if (error) {
      return (
        <CardSection>
          <Text style={styles.error}>{error.message}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { name, phone, shift } = this.state;
    const { loading } = this.props;
    if (loading) return <Spinner size="large" />;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane Doe"
            value={name}
            onChangeText={name => this.setState({ name })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </CardSection>
        <CardSection style={styles.pickerSection}>
          <Text style={styles.pickerLabel}>Shift</Text>
          <Picker
            style={styles.picker}
            selectedValue={shift}
            onValueChange={shift => this.setState({ shift })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSave.bind(this)}>Save</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleCancel.bind(this)}>Cancel</Button>
        </CardSection>
        {this.renderError()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    fontSize: 14,
    alignSelf: "center",
    color: "red"
  },
  picker: {},
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20
  },
  pickerSection: {
    flexDirection: "column"
  }
});

const mapStateToProps = ({ employee: { error, loading } }) => ({
  error,
  loading
});

export default connect(
  mapStateToProps,
  actions
)(EmployeeCreate);
