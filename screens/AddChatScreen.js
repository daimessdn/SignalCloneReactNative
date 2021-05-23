import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AddChatScreen({ navigation }) {
  // init'd empty input state
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  return (
    <View styles={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(value) => setInput(value)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
