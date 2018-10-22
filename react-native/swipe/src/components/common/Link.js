import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const LinkPrimitive = ({ to, navigation, text, ...rest }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(to)}>
      <View style={styles.view}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    alignSelf: "center"
  }
});

const Link = withNavigation(LinkPrimitive);

export { Link };
