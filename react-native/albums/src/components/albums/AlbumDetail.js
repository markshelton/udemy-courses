import React from "react";
import { Text, Image, View, StyleSheet, Linking } from "react-native";

import Card from "../ui/Card";
import CardSection from "../ui/CardSection";
import Button from "../ui/Button";

const AlbumDetail = ({ album }) => {
  const {
    headerViewStyle,
    headerTextStyle,
    thumbImageStyle,
    thumbViewStyle,
    mainImageStyle
  } = styles;
  const { thumbnail_image, title, artist, image, url } = album;
  return (
    <Card>
      <CardSection>
        <View style={thumbViewStyle}>
          <Image style={thumbImageStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerViewStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={mainImageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerViewStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailImageStyle: {
    height: 50,
    width: 50
  },
  thumbnailViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  mainImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
