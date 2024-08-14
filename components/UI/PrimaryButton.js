import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

function PrimaryButton({ children, myOnPress }) {
  // function pressHandler() { // alternative way
  //   myOnPress();
  // }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={myOnPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 15,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: '600',
    fontSize: '18'
  },
  pressed: {
    opacity: 0.75,
  },
});
