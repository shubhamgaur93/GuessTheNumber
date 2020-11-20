import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/common/Header";
import GameScreen from "./src/components/gameScreen";
import StartGame from "./src/components/startGame/StartGame";

export default function App(): JSX.Element {
  const [screenNumber, setscreenNumber] = useState(0);
  const [playerNumber, setplayerNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Header title="Guess the Number" />
      {screenNumber === 0 && (
        <StartGame
          setscreenNumber={(num: number): void => {
            setscreenNumber(num);
          }}
          setplayerNumber={(num: number): void => {
            setplayerNumber(num);
          }}
        />
      )}
      {screenNumber === 1 && (
        <GameScreen
          playerNumber={playerNumber}
          handleFinish={() => {
            setplayerNumber(0);
            setscreenNumber(0);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
