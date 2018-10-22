import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "../reducers";
import { Header } from "./common";
import LibraryList from "./LibraryList";

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Header headerText="Tech Stack" />
        <LibraryList style={styles.libraryList} />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  libraryList: { flex: 1 }
});

export default App;
