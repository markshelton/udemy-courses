import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import firebase from "firebase";

import { Button, Spinner, Header } from "./components/common";
import LoginForm from "./components/auth/LoginForm";

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDDDawVWVxPyP-2ol3nbsuw0psF23nWxac",
      authDomain: "rn-auth-2389a.firebaseapp.com",
      databaseURL: "https://rn-auth-2389a.firebaseio.com",
      projectId: "rn-auth-2389a",
      storageBucket: "rn-auth-2389a.appspot.com",
      messagingSenderId: "697761476665"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({ loggedIn: true });
      else this.setState({ loggedIn: false });
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }
  render() {
    const { viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center"
  }
});

export default App;
