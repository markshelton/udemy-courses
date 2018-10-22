import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./src/components/ui/Header";
import AlbumList from "./src/components/albums/AlbumList";

const App = () => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: { flex: 1, paddingBottom: 20 }
});

export default App;
