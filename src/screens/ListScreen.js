import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    { name: "Sreeram#1", age: 20 },
    { name: "Sreeram#2", age: 30 },
    { name: "Sreeram#3", age: 40 },
    { name: "Sreeram#4", age: 23 },
    { name: "Sreeram#5", age: 24 },
    { name: "Sreeram#6", age: 32 },
    { name: "Sreeram#7", age: 42 },
    { name: "Sreeram#8", age: 22 },
    { name: "Sreeram#9", age: 43 }
  ];

  return (
    <FlatList
      horizontal={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.secondText}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  secondText: {
    fontSize: 20,
    marginVertical: 10
  }
});

export default ListScreen;
