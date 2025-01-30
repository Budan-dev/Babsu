import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { StyleSheet, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme } from "@/hooks/useColorScheme";
import "../global.css";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import {
  useFonts,
  Alef_400Regular,
  Alef_700Bold,
} from "@expo-google-fonts/alef";
import CustomView from "@/components/CustomView";
import { ActivityIndicator, Button, TouchableOpacity } from "react-native";
import CustomText from "@/components/CustomText";
import CustomStartText from "@/components/CustomStartText";
import BackHambugger from "@/components/BackHambuger";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Alef_400Regular,
    Alef_700Bold,
  });

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const router = useRouter();
  const segments = useSegments();

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;
    const inAuthGroup = segments[0] === "(tabs)";
    if (user && !inAuthGroup) {
      router.replace("/(tabs)");
    } else if (!user && inAuthGroup) {
      router.replace("../");
    }
  }, [user, initializing, segments, router]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || initializing)
    return (
      <CustomView className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="rgb(10,36,36)" />
        <CustomText>Loading...</CustomText>
      </CustomView>
    );

  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="ChangePassword"
          options={{
            headerShown: true,
            headerTitle: " ",
            headerTransparent: true,
            headerLeft: () => <BackHambugger />,
          }}
        />
        <Stack.Screen
          name="signin"
          options={{
            headerShown: false,
            headerTitle: "", // Hides the title
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: false,
            headerTitle: "", // Hides the title
            headerTintColor: "white",
          }}
        />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#375c5c",
  },
});
