import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

import { CardSection } from "../common";

class EmployeeItem extends Component {
  render() {
    const { item, navigation } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("EmployeeEdit", {
            employee: item
          })
        }
      >
        <View>
          <CardSection>
            <Text style={styles.name}>{item.name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    paddingLeft: 15
  },
  phone: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default withNavigation(EmployeeItem);
