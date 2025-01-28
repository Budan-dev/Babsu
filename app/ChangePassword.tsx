import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import auth from "@react-native-firebase/auth";
import { useRouter } from "expo-router";
import CustomStartView from "@/components/CustomStartView";
import CustomStartText from "@/components/CustomStartText";
import InputText from "@/components/inputText";

export default function ResetPassword(): JSX.Element {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleResetPassword = async () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      // Send password reset email
      await auth().sendPasswordResetEmail(email);
      alert(
        "Password reset email sent! Please check your email to reset your password."
      );
      router.replace("/signin"); // Navigate back to the sign-in page
    } catch (error) {
      alert("Failed to send password reset email: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomStartView style={styles.container}>
      <CustomStartText style={styles.title}>Reset Password</CustomStartText>
      <InputText
        value={email}
        placeholderHeader={"Email"}
        placeholder="Email"
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <InputText
        value={newPassword}
        placeholderHeader={"New Password"}
        placeholder=" New Password"
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <InputText
        placeholder="Confirm Password"
        placeholderHeader="Confirm New Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleResetPassword}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Sending..." : "Send Reset Email"}
        </Text>
      </TouchableOpacity>
    </CustomStartView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "rgb(41,61,61)",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    height: 45,
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
