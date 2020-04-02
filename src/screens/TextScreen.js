import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text style={styles.text}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text style={styles.text}>your name is {name}</Text>
      {name.length > 5 ? (
        <Text></Text>
      ) : (
        <Text style={styles.errorText}>Password should be 5 digits long</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    fontSize: 20
  },
  text: {
    margin: 15,
    padding: 10,
    fontSize: 25
  },
  errorText: {
    margin: 15,
    padding: 10,
    fontSize: 15,
    color: "red",
    fontWeight: "bold"
  }
});

export default TextScreen;
