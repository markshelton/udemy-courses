import React from "react";
import { Text, View, Modal, StyleSheet } from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";

const Confirm = ({
  visible,
  onAccept,
  onDecline,
  children,
  animationType,
  ...rest
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType={animationType || "slide"}
      onRequestClose={() => {}}
      {...rest}
    >
      <View style={styles.container}>
        <CardSection style={styles.cardSection}>
          <Text style={styles.text}>{children}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.75)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  },
  cardSection: { justifyContent: "center" },
  text: { flex: 1, fontSize: 18, textAlign: "center", lineHeight: 40 }
});

export { Confirm };
