import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";

export default function BackHambugger() {
  const navigation = useNavigation();
  return (
    <View style={Styles.Container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="rgb(41,61,61)" />
      </Pressable>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    backgroundColor: "hsl(180,12%,46%)",
    borderRadius: 20,
    padding: 5,
  },
});
