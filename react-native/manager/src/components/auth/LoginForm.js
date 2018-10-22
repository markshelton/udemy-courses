import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { Card, CardSection, Input, Button, Spinner, Link } from "../common";
import * as actions from "../../state/actions";

const INITIAL_STATE = { email: "", password: "" };

class LoginForm extends Component {
  static navigationOptions = { title: "Welcome" };
  state = INITIAL_STATE;
  componentWillMount() {
    this.setState(INITIAL_STATE);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) this.props.navigation.navigate("AppRouter");
  }
  handleSubmit() {
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
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
    if (this.props.loading) return <Spinner size="large" />;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSubmit.bind(this)}>Login</Button>
        </CardSection>
        <CardSection>
          <Link to="ResetPassword" text="Forgotten your password?" />
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
  }
});

const mapStateToProps = ({ auth: { error, loading, user } }) => ({
  error,
  loading,
  loggedIn: !!user
});

export default connect(
  mapStateToProps,
  actions
)(LoginForm);
