import * as React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import db from "../db";
export default class WeatherScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam("data"),
    };
  }
  render() {
    console.log(this.props.navigation.getParam("data"));
    return (
      <View style={{}}>
        <Header
          centerComponent={{
            text: this.state.data.name,
            style: {
              fontWeight: "bold",
              fontSize: 30,
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            },
          }}
        />
        <Image
          source={db[this.state.data.name]}
          style={{ width: 450, height: 400 }}
        ></Image>
        <View style={styles.text}>
          <Text style={styles.font}>Temperature:{this.state.data.main.temp}</Text>
          <Text style={styles.font}>Feels Like:{this.state.data.main.feels_like}</Text>
          <Text style={styles.font}>Minimum Temperature:{this.state.data.main.temp_min}</Text>
          <Text style={styles.font}>Maximum Temperature:{this.state.data.main.temp_max}</Text>
          <Text style={styles.font}>Pressure:{this.state.data.main.pressure}</Text>
          <Text style={styles.font}>Humidity:{this.state.data.main.humidity}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 90,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  font:{
    fontSize:20
  }
});
