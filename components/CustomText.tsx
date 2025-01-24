import { Text, useColorScheme } from "react-native";
import React from "react";

import {
  useFonts,
  Alef_400Regular,
  Alef_700Bold,
} from "@expo-google-fonts/alef";
import { TextProps } from "react-native";

const CustomText = (props: TextProps) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? "#FFFFFF" : "#E0F7F7";
  const [fontsLoaded] = useFonts({
    Alef_400Regular,
    Alef_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      {...props}
      style={[
        { textAlign: "center" },
        props.style,
        { color, fontFamily: "Alef_400Regular" },
      ]}
    />
  );
};

export default CustomText;
