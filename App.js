import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}

export default App;