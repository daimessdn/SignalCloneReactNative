import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "react-native-elements";

import { auth } from "../firebase";

export default function LoginScreen({ navigation }) {
  // initial credential state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // proceed auth state when login
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

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
        <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />

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
