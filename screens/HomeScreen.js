import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "react-native-elements";

import { auth } from "../firebase";

export default function RegisterScreen({ navigation }) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text>This is a homepage</Text>
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
  }
});
