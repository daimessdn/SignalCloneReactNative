import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { db } from "../firebase";

export default function AddChatScreen({ navigation }) {
  // init'd empty input state
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  // function to create chat
  const createChat = async () => {
    await db
      .collection("chats")
      .add({ chatName: input })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(value) => setInput(value)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="comments" type="antdesign" size={24} color="black" />
        }
      />

      <Button onPress={createChat} title="Create a new chat" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
