import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Setting",
          headerShown: true,
          headerLargeTitle: false,
          headerStyle: {
            backgroundColor: "#faf5f5",
          },
        }}
      />
    </Stack>
  );
}
