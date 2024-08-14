import { Text, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

function instructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default instructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.yellow,
    fontSize: 24,
  },
});
