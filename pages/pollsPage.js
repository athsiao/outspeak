import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const PollsScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Polls screen</Text>
      <Button
        title="Go to Test Screen"
        onPress={() => navigation.navigate("Test")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default PollsScreen;
