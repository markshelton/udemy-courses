import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Spinner = ({ size, ...rest }) => {
  const { spinnerStyle } = styles;
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || "large"} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export { Spinner };
