import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HEADER_HEIGHT, LARGE_FONT_SIZE, MEDIUM_FONT_SIZE, PRIMARY_COLOR, TOP_APP_SPACING } from "../../constants";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps): JSX.Element {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: TOP_APP_SPACING,
    width: "100%",
    height: HEADER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_COLOR
  },
  headerText: {
    fontSize: LARGE_FONT_SIZE,
    color: "white",
    fontWeight: "bold"
  },
});
