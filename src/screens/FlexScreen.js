import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlexScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 400
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red"
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red"
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red"
  }
});

export default FlexScreen;
