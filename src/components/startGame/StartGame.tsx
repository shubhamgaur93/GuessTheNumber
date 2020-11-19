import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  BUTTON_BORDER_RADIUS,
  BUTTON_HEIGHT,
  BUTTON_WIDTH,
  DANGER_COLOR,
  MEDIUM_FONT_SIZE,
  NORMAL_SPACING,
  PRIMARY_COLOR,
  SMALL_FONT_SIZE,
  SMALL_SPACING,
} from "../../constants";
import ButtonCustom from "../common/Button";
import Card from "../common/CardLayout";
import CommonLayout from "../common/CommonLayout";
import NumberContainer from "../common/NumberContainer";

interface StartGameProps {
  setscreenNumber: (num: number) => void;
  setplayerNumber: (num: number) => void;
}

const StartGame = (props: StartGameProps): JSX.Element => {
  const { setscreenNumber, setplayerNumber } = props;

  const [text, settext] = useState("");
  const [confirmedNumber, setconfirmedNumber] = useState<number>(0);
  const [isConfirmed, setisConfirmed] = useState(false);

  const handleReset = () => {
    settext("");
    setisConfirmed(false);
    setconfirmedNumber(0);
  };

  const handleSubmit = () => {
    let tempNumber = parseInt(text);
    if (isNaN(tempNumber) || tempNumber <= 0 || tempNumber > 99) {
      Alert.alert("Invalid Input", "Please enter number between 1 to 99", [
        { text: "Okay", onPress: handleReset, style: "destructive" },
      ]);
      return;
    }
    setisConfirmed(true);
    setconfirmedNumber(tempNumber);
    settext("");
  };

  return (
    <CommonLayout>
      <View style={styles.headingWrapper}>
        <Text style={styles.startGameHeading}>Start the Game</Text>
      </View>
      <Card>
        <View style={styles.thirdWrapper}>
          <Text style={styles.secondText}>Enter the Number:</Text>
          <TextInput
            style={styles.textInput}
            blurOnSubmit={true}
            value={text}
            autoCapitalize={"none"}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => {
              if (/^[0-9]*$/g.test(text)) settext(text);
            }}
          />
        </View>
        <View style={styles.fouthWrapperButtons}>
          <ButtonCustom
            onPress={handleReset}
            buttonStyle={styles.resetButton}
            buttonText="Reset"
          />
          <ButtonCustom
            onPress={handleSubmit}
            buttonStyle={styles.submitButton}
            buttonText="Submit"
          />
        </View>
      </Card>
      {isConfirmed && (
        <Card style={styles.card}>
          <Text style={styles.thirddText}>Your confirmed Number is:</Text>
          <NumberContainer>{confirmedNumber}</NumberContainer>
          <ButtonCustom
            onPress={() => {
              setplayerNumber(confirmedNumber);
              setscreenNumber(1);
            }}
            buttonStyle={styles.startGameButton}
            buttonText="Start Game"
          />
        </Card>
      )}
    </CommonLayout>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  startGameButton: {
    backgroundColor: PRIMARY_COLOR,
    marginTop: NORMAL_SPACING,
  },
  headingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    display: "flex",
    textAlign: "center",
  },
  startGameHeading: {
    fontSize: MEDIUM_FONT_SIZE,
    fontWeight: "bold",
    marginBottom: NORMAL_SPACING,
    color: PRIMARY_COLOR,
    justifyContent: "center",
    display: "flex",
  },
  thirdWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondText: {
    color: PRIMARY_COLOR,
    width: "50%",
    fontSize: SMALL_FONT_SIZE,
  },
  thirddText: {
    color: PRIMARY_COLOR,
    fontSize: SMALL_FONT_SIZE,
  },
  textInput: {
    borderColor: PRIMARY_COLOR,
    fontWeight: "bold",
    borderBottomWidth: 1,
    width: "30%",
    color: PRIMARY_COLOR,
    padding: SMALL_SPACING,
    justifyContent: "center",
    textAlign: "center",
  },
  fouthWrapperButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: NORMAL_SPACING,
  },
  resetButton: {
    backgroundColor: DANGER_COLOR,
  },
  submitButton: {
    backgroundColor: PRIMARY_COLOR,
  },
  card: {
    marginTop: NORMAL_SPACING,
    alignItems: "center",
  },
});
