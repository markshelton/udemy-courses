import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Ball from "./components/Ball";
import Deck from "./components/Deck";
import DATA from "./deck_data.json";

//<Deck data={DATA} />

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
