import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import firebase from "firebase";

import { Card, CardSection, Button, Input, Spinner } from "../common";

const initialState = { email: "", password: "", error: "", loading: false };

class LoginForm extends Component {
  state = initialState;
  onSubmit() {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailure.bind(this));
      });
  }
  onLoginSuccess() {
    this.setState(initialState);
  }
  onLoginFailure() {
    this.setState({ error: "Authentication Failed.", loading: false });
  }
  renderButton() {
    if (this.state.loading) return <Spinner size="small" />;
    return <Button onPress={this.onSubmit.bind(this)}>Log In</Button>;
  }
  renderError() {
    const { errorStyle } = styles;
    if (this.state.error)
      return (
        <CardSection>
          <Text style={errorStyle}>{this.state.error}</Text>
        </CardSection>
      );
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password123"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>{this.renderButton()}</CardSection>
        {this.renderError()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
});

export default LoginForm;
