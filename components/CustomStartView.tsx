import { View, useColorScheme } from "react-native";
import React from "react";
import { ViewProps } from "react-native";

const CustomStartView = (props: ViewProps) => {
  const colorScheme = useColorScheme();

  const backgroundColor = colorScheme === "dark" ? "#D4E4E4" : "#D4E4E4";
  return (
    <View
      {...props}
      style={[
        props.style,
        {
          backgroundColor,
          flex: 1,
        },
      ]}
    ></View>
  );
};

export default CustomStartView;
