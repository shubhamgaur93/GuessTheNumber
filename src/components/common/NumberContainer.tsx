import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BOX_HEIGHT, BOX_WIDTH, MEDIUM_FONT_SIZE, NORMAL_SPACING, PRIMARY_COLOR } from "../../constants";

const NumberContainer = (props: any): JSX.Element => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  main: {
    height: BOX_HEIGHT,
    width: BOX_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    marginTop: NORMAL_SPACING,
    backgroundColor: PRIMARY_COLOR
  },
  text: {
    color: "white",
    fontSize: MEDIUM_FONT_SIZE
  },
});
