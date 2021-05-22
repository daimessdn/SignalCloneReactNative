import React, { useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "react-native-elements";

export default function RegisterScreen({ navigation }) {
  // initial credential state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // function to register
  const register = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>Create a signal account</Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="name"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <Input
          placeholder="Email"
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
        <Input
          placeholder="Profile image URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(value) => setImageUrl(value)}
        />

        <Button raised containerStyle={styles.button} onPress={register} title="Register" />

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
