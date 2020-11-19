import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BUTTON_BORDER_RADIUS,
  BUTTON_HEIGHT,
  BUTTON_WIDTH,
  PRIMARY_COLOR,
  SMALL_FONT_SIZE,
} from "../../constants";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle: { backgroundColor: string };
  textStyle?: any;
  buttonText: string;
}

const ButtonCustom = (props: ButtonProps) => {
  const { onPress, buttonStyle, textStyle, buttonText } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.buttonStyle, ...buttonStyle }}>
        <Text style={{ ...styles.textStyle, ...textStyle }}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  textStyle: { color: "white", fontSize: SMALL_FONT_SIZE, fontWeight: "bold" },
  buttonStyle: {
    backgroundColor: PRIMARY_COLOR,
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
  },
});
