import React, { Component } from 'react';
import Loading from './components/transitions/Loading'
import {Platform, View} from 'react-native';

class App extends Component {

  render() {


    return (
      <View>
        <Loading/>
      </View>
    );
  }
}


let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
