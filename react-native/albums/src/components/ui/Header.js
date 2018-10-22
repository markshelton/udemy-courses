import React from "react";
import { Text, View, Platform, StyleSheet, StatusBar } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    ...Platform.select({
      ios: { shadowOpacity: 0.2 },
      android: { elevation: 5, paddingTop: StatusBar.currentHeight }
    })
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
