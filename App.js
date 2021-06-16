import * as React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Header } from "react-native-elements";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./screens/homeScreen";
import WeatherScreen from "./screens/weatherScreen";
export default class App extends React.Component {
  render() {
    return <Appcontainer />;
  }
}
const StackNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: { headerShown: false } },
  WeatherScreen: { screen: WeatherScreen },
});
const Appcontainer = createAppContainer(StackNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
