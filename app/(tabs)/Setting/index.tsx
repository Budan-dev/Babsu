import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomView from "@/components/CustomView";
import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";

export default function Setting() {
  const router = useRouter();

  const handleSignOut = async () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Sign Out",
          onPress: async () => {
            try {
              await auth().signOut();
              router.replace("../"); // Navigate to the sign-in page
            } catch (error) {
              console.error("Error signing out: ", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <CustomView className="flex-1 items-center justify-center">
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(4,61,80)",
    padding: 10,
    borderRadius: 23,
    alignItems: "center",
    marginVertical: 10,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
