
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {TabNavigator} from './components/TabNavigator'
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default class App extends Component {
  render(){
  return 
  <AppContainer/>
  

  }
}

const switchNavigator=createSwitchNavigator({
  welcome:{screen:WelcomeScreen},
  drawer:{screen:AppDrawerNavigator}
})

const AppContainer=createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
