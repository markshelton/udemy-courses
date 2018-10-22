import React, { Component } from "react";
import { Text, Picker, StyleSheet } from "react-native";
import Communications from "react-native-communications";
import { connect } from "react-redux";

import { Button, Card, CardSection, Input, Spinner, Confirm } from "../common";
import * as actions from "../../state/actions";

const INITIAL_STATE = {
  uid: null,
  name: "",
  phone: "",
  shift: "Monday",
  showModal: false
};

class EmployeeEdit extends Component {
  state = { ...INITIAL_STATE, ...this.props.navigation.getParam("employee") };
  handleSave() {
    const { uid, name, phone, shift } = this.state;
    this.props.editEmployee({ uid, name, phone, shift });
  }
  handleMessage() {
    const { phone, shift } = this.state;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }
  handleFire() {
    this.setState({ showModal: true });
  }
  handleFireCancel() {
    this.setState({ showModal: false });
  }
  handleDelete() {
    const { uid } = this.state;
    this.props.deleteEmployee({ uid });
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
    const { name, phone, shift, showModal } = this.state;
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
          <Button onPress={this.handleSave.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleMessage.bind(this)}>Send Message</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleFire.bind(this)}>Fire Employee</Button>
        </CardSection>
        <Confirm
          visible={showModal}
          onAccept={this.handleDelete.bind(this)}
          onDecline={this.handleFireCancel.bind(this)}
        >
          Are you sure you want to fire this employee?
        </Confirm>
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
)(EmployeeEdit);
