import React from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NORMAL_SPACING } from "../../constants";

const CommonLayout = (props: any) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.main}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};

export default CommonLayout;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    flex: 1,
    padding: NORMAL_SPACING,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    display: "flex",
    width: "100%",
    height: "100%",
  },
});
