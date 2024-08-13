import { Text, StyleSheet } from "react-native";
function Title({children}) {
  return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00235B",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#FBF0B2",
    padding: 12,
  },
});
