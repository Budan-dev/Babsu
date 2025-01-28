import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { Key } from "react";
import { TextInput } from "react-native-gesture-handler";
import CustomStartText from "./CustomStartText";
import { KeyboardTypeOptions } from "react-native";
interface InputTextProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  placeholderHeader: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  secureTextEntry?: boolean;
}

export default function inputText(props: InputTextProps) {
  const { value, onChangeText, placeholder, placeholderHeader } = props;
  return (
    <View>
      <KeyboardAvoidingView behavior="padding">
        <CustomStartText className="text-xm font-bold">
          {placeholderHeader}
        </CustomStartText>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "hsl(180,12%,46%)",
    borderWidth: 0,
    marginBottom: 10,
    margin: 0,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    height: 55,
    width: 350,
    color: "hsl(180°, 5%, 56%)",
  },
});
