import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Contact screen</Text>
      <Button
        title="Go to Search Screen"
        onPress={() => navigation.navigate("Search")}
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

export default ContactScreen;
