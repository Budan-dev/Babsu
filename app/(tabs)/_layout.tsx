import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import TabIcon from "@/components/TabIcon";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3A5A5A",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            backgroundColor: "#678282",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabIcon family="Ionicons" name="home" color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => (
            <TabIcon family="SimpleLineIcons" name="wallet" color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="Trade"
        options={{
          title: "Trade",
          tabBarIcon: ({ color }) => (
            <TabIcon family="FontAwesome5" name="chart-bar" color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="Community"
        options={{
          title: "Community",
          tabBarIcon: ({ color }) => (
            <TabIcon family="MaterialIcons" name="groups-3" color="white" />
          ),
        }}
      />

      <Tabs.Screen
        name="Setting"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon family="SimpleLineIcons" name="settings" color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
