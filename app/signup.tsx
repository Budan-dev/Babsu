import {
  ActivityIndicator,
  KeyboardAvoidingView,
  NativeEventEmitter,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import CustomStartView from "@/components/CustomStartView";
import CustomStartText from "@/components/CustomStartText";
import InputText from "@/components/inputText";

export default function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      alert("Check your emails");
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Registration Failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const router = useRouter();
  const navigateToSignIn = () => {
    router.replace("/signin"); // Navigate to the sign-in page
  };
  return (
    <CustomStartView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <CustomStartText className="text-2xl text-center font-bold tracking-widest mb-7">
          Create an Account
        </CustomStartText>

        <InputText
          value={name}
          placeholderHeader={"Name"}
          placeholder="Name"
          onChangeText={setName}
        />

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
            size={"large"}
            color="rgb(10,36,36)"
            style={{
              margin: 28,
            }}
          />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={signUp}>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </>
        )}
        <CustomStartText className="text-center pt-3 font-normal">
          Already have an account{" "}
          <CustomStartText
            style={styles.Link}
            onPress={() => router.push("/signin")}
          >
            Sign In
          </CustomStartText>
        </CustomStartText>
      </KeyboardAvoidingView>
    </CustomStartView>
  );
}

const styles = StyleSheet.create({
  container: {
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
