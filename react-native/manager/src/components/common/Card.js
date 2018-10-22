import React from "react";
import { View, Platform, StyleSheet } from "react-native";

const Card = ({ children }) => {
  const { viewStyle } = styles;
  return <View style={viewStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    ...Platform.select({
      ios: { shadowOpacity: 0.2 },
      android: { elevation: 5 }
    })
  }
});

export { Card };
