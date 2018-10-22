import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import axios from "axios";

import AlbumDetail from "./AlbumDetail";

const API_URL = "https://rallycoding.herokuapp.com/api/music_albums";

class AlbumList extends Component {
  state = { albums: [] };
  async componentDidMount(prevProps) {
    const response = await axios.get(API_URL);
    this.setState({ albums: response.data });
  }
  render() {
    const { viewStyle } = styles;
    return (
      <ScrollView style={viewStyle}>
        {this.state.albums.map(album => (
          <AlbumDetail key={album.title} album={album} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {}
});

export default AlbumList;
