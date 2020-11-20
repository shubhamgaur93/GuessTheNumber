import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { MEDIUM_FONT_SIZE, NORMAL_SPACING } from "../../constants";
import ButtonCustom from "../common/Button";
import Card from "../common/CardLayout";
import CommonLayout from "../common/CommonLayout";
import NumberContainer from "../common/NumberContainer";

import { findRandomNumber } from "./../../utils/CommonUtils";

interface GameScreenProps {
  playerNumber: number;
  handleFinish: () => void;
}
const GameScreen = (props: GameScreenProps) => {
  const { playerNumber, handleFinish } = props;

  const [min, setmin] = useState(0);
  const [max, setmax] = useState(100);

  const randomNumber = findRandomNumber(min, max);

  const handleGreater = (): void => {
    if (randomNumber <= playerNumber) {
      Alert.alert("Don't Lie", "You know number is not greater");
      return;
    }
    setmax(randomNumber);
  };

  const handleLesser = (): void => {
    if (randomNumber >= playerNumber) {
      Alert.alert("Don't Lie", "You know number is not lesser");
      return;
    }
    setmin(randomNumber);
  };

  return (
    <CommonLayout>
      <Card style={styles.card1}>
        <Text style={styles.text1}>Opponent Guess is</Text>
        <NumberContainer>{randomNumber}</NumberContainer>
      </Card>
      <Card style={styles.card2}>
        <View style={styles.buttonWrap}>
          <ButtonCustom onPress={handleGreater} buttonText="Greater" />
          <ButtonCustom onPress={handleLesser} buttonText="Lesser" />
        </View>
        <View>
          <ButtonCustom onPress={() => {handleFinish()}} buttonText="Finish" />
        </View>
      </Card>
      <View>
        <Text>{playerNumber}</Text>
      </View>
    </CommonLayout>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  card1: {
    width: "100%",
    alignItems: "center",
    marginBottom: NORMAL_SPACING,
  },
  card2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  text1: {
    fontSize: MEDIUM_FONT_SIZE,
  },
  buttonWrap: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: NORMAL_SPACING,
  },
});
