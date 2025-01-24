import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";
import CustomText from "@/components/CustomText";
import CustomView from "@/components/CustomView";
import { Ionicons } from "@expo/vector-icons";
export default function wallet() {
  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomText style={{ fontSize: 30 }}>wallet</CustomText>
      <Ionicons name="wallet" size={34} color={"blue"} />
    </CustomView>
  );
}

const styles = StyleSheet.create({});
