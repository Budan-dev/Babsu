import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import { useRouter } from "expo-router";
import CustomStartView from "@/components/CustomStartView";
import CustomStartText from "@/components/CustomStartText";
import InputText from "@/components/inputText";

export default function signIn(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("SignIn Failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();
  const navigateToSignUp = () => {
    router.replace("/signup"); // Navigate to the sign-up page
  };

  return (
    <CustomStartView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <CustomStartText className="text-2xl text-center font-bold tracking-widest mb-7">
          Sign In to your Account
        </CustomStartText>
        <InputText
          value={email}
          placeholderHeader={"Email"}
          placeholder="Email"
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <InputText
          value={password}
          placeholderHeader={"Password"}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
        />
        {loading ? (
          <ActivityIndicator
            size={"small"}
            color="rgb(10,36,36)"
            style={{
              margin: 28,
            }}
          />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={signIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </>
        )}
        <CustomStartText className="text-center pt-3 font-normal">
          Don't have an account?{" "}
          <CustomStartText
            style={styles.Link}
            onPress={() => router.push("/signup")}
          >
            Sign Up
          </CustomStartText>
        </CustomStartText>

        <CustomStartText className="text-center pt-3 font-normal">
          Forgotten Password?{" "}
          <CustomStartText
            style={styles.Link}
            onPress={() => router.push("/ChangePassword")}
          >
            Change Password
          </CustomStartText>
        </CustomStartText>
      </KeyboardAvoidingView>
    </CustomStartView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  Link: {
    color: "rgb(41,61,61)",
    fontWeight: "bold",
  },
});
