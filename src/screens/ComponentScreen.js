import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const name = "Sagar Podilapu";
  return (
    <View>
      <Text style={styles.text}>Getting started with ReactNative</Text>
      <Text style={styles.secondText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  secondText: {
    fontSize: 20
  }
});

export default ComponentScreen;
