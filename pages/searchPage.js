import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Search screen</Text>
      <Button
        title="Go to Polls Screen"
        onPress={() => navigation.navigate("Polls")}
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

export default SearchScreen;
