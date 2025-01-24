import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import CustomView from "@/components/CustomView";
import CustomText from "@/components/CustomText";
import CustomStartText from "@/components/CustomStartText";
import CustomStartView from "@/components/CustomStartView";
import { Link } from "expo-router";
import { Canvas } from "@shopify/react-native-skia";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";

export default function index() {
  const size = useSharedValue({ width: 0, height: 0 });
  return (
    <CustomStartView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/back.jpg")}
        style={styles.backgroundImage}
      >
        <View className="flex-1 justify-end items-center pb-6">
          <CustomStartText className="text-2xl text-center font-bold tracking-widest">
            Welcome To Busha
          </CustomStartText>
        </View>

        <View className="flex flex-row p-3 mt-auto mb-3">
          <Link
            href={"/signin"}
            className="bg-blue-500 p-5 rounded-3xl "
            style={styles.button}
            asChild
          >
            <TouchableOpacity>
              <CustomText>Sign in</CustomText>
            </TouchableOpacity>
          </Link>

          <Link
            href={"/signup"}
            className="bg-blue-500 p-5 rounded-3xl "
            style={styles.button}
            asChild
          >
            <TouchableOpacity>
              <CustomText>Sign up</CustomText>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </CustomStartView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 150,
    margin: 10,
    backgroundColor: "#293D3D",
    textAlign: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
