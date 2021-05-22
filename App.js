import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// importing React Navigation packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing external components
import LoginScreen from "./screens/LoginScreen";

// initial stack
const Stack = createStackNavigator();

export default function App() {
  // set up global screen options style
  const globalScreenOptions = {
    headerStyle: { backgroundColor: "#2c6bed" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white"
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
