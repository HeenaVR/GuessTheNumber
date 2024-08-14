import { View, Image, StyleSheet, Text } from "react-native";

import Title from "../components/UI/Title";
import Colors from "../Constants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightFont}>{roundsNumber}</Text> rounds to
        guess the number <Text style={styles.highlightFont}>{userNumber}.</Text>
      </Text>
      <PrimaryButton myOnPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.blue,
    overflow: "hidden",
    margin: 36,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlightFont: {
    fontFamily: "open-sans-bold",
    color: Colors.yellow,
  },
});
