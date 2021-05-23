import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text, Avatar } from "react-native-elements";

import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import CustomListItem from "../components/CustomListItem";

import { auth } from "../firebase";

export default function HomeScreen({ navigation }) {
  // sign out user function
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={.5} onPress={signOutUser}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 80,
          marginRight: 20
        }}>
          <TouchableOpacity activeOpacity={.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("AddChat")} activeOpacity={.5}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
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
