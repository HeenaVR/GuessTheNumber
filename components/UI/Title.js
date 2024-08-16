import { Text, StyleSheet, Dimensions, Platform } from "react-native";
import Colors from "../../Constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 24 : 28,
    color: Colors.blue,
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({iOS: 0, android: 2}),
    borderColor: Colors.secondary,
    padding: 12,
    maxWidth: "80%",
    width: 300, 
  },
});
