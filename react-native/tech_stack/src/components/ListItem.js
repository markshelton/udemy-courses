import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  NativeModules,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

import { CardSection } from "./common";
import * as actions from "../actions";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const {
      expanded,
      item: { description }
    } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.description}>{description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    const { id, title } = this.props.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.title}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  },
  description: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});

const mapStateToProps = ({ selectedLibraryId }, { item: { id } }) => ({
  expanded: selectedLibraryId === id
});

export default connect(
  mapStateToProps,
  actions
)(ListItem);
