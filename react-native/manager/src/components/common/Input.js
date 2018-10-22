import React from "react";
import { TextInput, View, Text, StyleSheet, Platform } from "react-native";

const Input = ({ label, autoCorrect, autoCapitalize, ...rest }) => {
  const { viewStyle, labelStyle, textInputStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={autoCorrect || false}
        autoCapitalize={autoCapitalize || "none"}
        style={textInputStyle}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textInputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 2,
    ...Platform.select({
      ios: {
        lineHeight: 23
      },
      android: {
        lineHeight: 25,
        paddingBottom: 5
      }
    })
  }
});

export { Input };
