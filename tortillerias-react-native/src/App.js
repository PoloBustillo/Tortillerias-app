import React, { Component } from 'react';
import Loading from './components/transitions/Loading';
import SignUp from './components/Signup';
import {Platform, View} from 'react-native';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

// create our app's navigation stack
const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(RootStack);

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
