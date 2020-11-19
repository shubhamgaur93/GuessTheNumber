import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommonLayout from "../common/CommonLayout";

interface GameScreenProps {
  playerNumber: number;
}
const GameScreen = (props: GameScreenProps) => {
  const { playerNumber } = props;

  return (
    <CommonLayout>
      <Text>{playerNumber}</Text>
    </CommonLayout>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
