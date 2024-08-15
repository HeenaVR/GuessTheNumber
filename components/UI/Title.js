import { Text, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 28,
    color: Colors.blue,
    textAlign: "center",
    // borderWidth: 2,
    // borderColor: Colors.secondary,
    padding: 12,
    maxWidth: '80%',
    width: 300
  },
});
