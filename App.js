import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/homescreen';
import LoginScreen from './screens/loginScreen';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
       <AppContainer />
      </View>
    )
  }
}
const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen
    },
   home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
