import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 5;
const COLOR_DECREMENT = -COLOR_INCREMENT;
const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      re =
        state.red + action.payload > 255 || state.red + action.payload < 0
          ? state
          : { ...state, red: state.red + action.payload };
      return re;
    case "change_green":
      gr =
        state.green + action.payload > 255 || state.green + action.payload < 0
          ? state
          : { ...state, green: state.green + action.payload };
      return gr;
    case "change_blue":
      bl =
        state.blue + action.payload > 255 || state.blue + action.payload < 0
          ? state
          : { ...state, blue: state.green + action.payload };
      return bl;
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "change_red", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_red", payload: COLOR_DECREMENT });
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_green", payload: COLOR_DECREMENT });
        }}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_DECREMENT });
        }}
        color="Blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
