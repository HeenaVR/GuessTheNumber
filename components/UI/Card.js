import { StyleSheet, View } from "react-native";

import Colors from "../../Constants/Colors";

function card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    elevation: 4, //Android shadow
    shadowColor: "black",
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
