import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the SettingsScreen screen</Text>
      <Button
        title="Go to Contact Screen"
        onPress={() => navigation.navigate("Contact")}
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

export default SettingsScreen;
