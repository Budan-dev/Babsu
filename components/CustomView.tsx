import { View, useColorScheme, StyleSheet } from "react-native";
import React from "react";
import { ViewProps } from "react-native";

const CustomView = (props: ViewProps) => {
  const colorScheme = useColorScheme();

  const backgroundColor = colorScheme === "dark" ? "#1A2525" : "#293D3D";
  return (
    <View
      {...props}
      style={[
        styles.container,
        props.style,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomView;
