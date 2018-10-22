import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";

import rootReducer from "./state/reducers";
import { RootNavigator, NavigationService } from "./services/navigation/";

console.ignoredYellowBox = ["Setting a timer"];

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyADzkFHNIav19HaZOivkirr5BnSIWDAucY",
      authDomain: "rn-manager-6be71.firebaseapp.com",
      databaseURL: "https://rn-manager-6be71.firebaseio.com",
      projectId: "rn-manager-6be71",
      storageBucket: "",
      messagingSenderId: "817957907600"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigator ref={NavigationService.setTopLevelNavigator} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
