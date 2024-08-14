import { View, Text, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.blue,
    borderWidth: 0.1,
    borderRadius: 36,
    padding: 12,
    marginVertical: 6,
    backgroundColor: Colors.yellow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  itemText: {
    fontFamily: 'open-sans',
    color: Colors.blue
  }
})
