import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NORMAL_SPACING } from "./../../constants";

const Card = (props: any): JSX.Element => {
  return (
    <View style={{ ...props.style, ...styles.card }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: NORMAL_SPACING,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    backgroundColor: "white",
  },
});
