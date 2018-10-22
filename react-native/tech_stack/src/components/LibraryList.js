import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";

import ListItem from "./ListItem";

class LibraryList extends Component {
  renderLibrary(library) {
    return <ListItem item={library.item} />;
  }
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderLibrary}
        keyExtractor={({ id }) => id.toString()}
      />
    );
  }
}

const mapStateToProps = ({ libraries }) => ({ libraries });

export default connect(mapStateToProps)(LibraryList);
