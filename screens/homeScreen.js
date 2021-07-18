import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Header } from "react-native-elements";
import DropdownPicker from "react-native-dropdown-picker";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      weather: "",
      sloading: false,
    };
  }
  temp = async () => {
    console.log("city"+this.state.city)
    var link =
     "http://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&units=metric&appid=22515dbe8047cf659da74a1cae281c2e"
    return fetch(link)
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        await this.setState({
          weather: data,
         
        });
        this.props.navigation.navigate("WeatherScreen", { data: this.state.weather });
      });
  };
  render() {
    if (this.state.sloading == true) {
      return (
        <View style={{ marginTop: 50 }}>
          <ActivityIndicator size={"medium"}></ActivityIndicator>
        </View>
      );
    } else {
      return (
        <View>
          <ScrollView>
            <Header
              centerComponent={{ text: "Weather App" }}
              style={{ fontWeight: "bold", fontSize: 70 }}
            />
            <DropdownPicker
              items={[
                { label: "Bhubaneswar", value: "Bhubaneswar" },
                { label: "Hyderabad", value: "Hyderabad" },
                { label: "Itanagar", value: "Itanagar" },
                { label: "Dispur", value: "Dispur" },
                { label: "Patna", value: "Patna" },
                { label: "Raipur", value: "Raipur" },
                { label: "Panaji", value: "Panaji" },
                { label: "Gandhinagar", value: "Gandhinagar" },
                { label: "Chandigarh", value: "Chandigarh" },
                { label: "Shimla", value: "Shimla" },
                { label: "Ranchi", value: "Ranchi" },
                { label: "Bengaluru", value: "Bengaluru" },
                { label: "Thiruvananthapuram", value: "Thiruvananthapuram" },
                { label: "Bhopal", value: "Bhopal" },
                { label: "Mumbai", value: "Mumbai" },
                { label: "Imphal", value: "Imphal" },
                { label: "Shillong", value: "Shillong" },
                { label: "Aizawl", value: "Aizawl" },
                { label: "Kohima", value: "Kohima" },
                { label: "Jaipur", value: "Jaipur" },
                { label: "Gangtok", value: "Gangtok" },
                { label: "Chennai", value: "Chennai" },
                { label: "Agartala", value: "Agartala" },
                { label: "Lucknow", value: "Lucknow" },
                { label: "Dehradun", value: "Dehradun" },
                { label: "Kolkata", value: "Kolkata" },
              ]}
              containerStyle={{ height: 50, width: 410 }}
              itemStyle={{ justifyContent: "flex-start" }}
              defaultValue={"Select a City"}
              onChangeItem={async (item) => {
                await this.setState({
                  city: item.value,
                 
                });
                await this.temp();
              }}
            ></DropdownPicker>
            <Image source={require("../India.jpg")}></Image>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
