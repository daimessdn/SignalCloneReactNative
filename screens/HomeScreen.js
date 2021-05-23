import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text, Avatar } from "react-native-elements";

import CustomListItem from "../components/CustomListItem";

import { auth } from "../firebase";

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      )
    });
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <CustomListItem />
      </ScrollView>
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
