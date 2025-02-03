import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LotttieView from "lottie-react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.animationContainer}>
      <LotttieView
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#D4E4E4",
        }}
        autoPlay
        loop
        source={require("../assets/Animation.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#D4E4E4",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
