import React, { useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "react-native-elements";

export default function LoginScreen() {
  // initial credential state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function to change text once being inputted

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 100, height: 100 }}
      />

      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <Button containerStyle={styles.button} title="Login" />
        <Button containerStyle={styles.button} type="outline" title="Register" />

        <View style={{ height: 100 }} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10
  }
});
