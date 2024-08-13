import { Text, View, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View>
      <Text styles={styles.screen}>Opponent's Guess</Text>
      {/* GUESS */}
      <View>
        <Text>higher or lower?</Text>
        {/* +- */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12
  }
});
