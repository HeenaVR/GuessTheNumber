import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

import Title from "../components/UI/Title";
import Colors from "../Constants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageShadowContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/SuccessGameOver.jpg")}
          />
        </View>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightFont}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlightFont}>{userNumber}.</Text>
      </Text>
      <PrimaryButton myOnPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageShadowContainer: {
    elevation: 4,
    shadowColor: Colors.blue,
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 2.5,
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 0.2,
    borderColor: Colors.blue,
    overflow: "hidden",
    margin: 25,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightFont: {
    fontFamily: "open-sans-bold",
    color: Colors.blue,
  },
});
