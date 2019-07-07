import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Animated,
  Easing,
  Button,
  DividerVertical,
  ActivityIndicator,
  Image
} from 'react-native';
import logo from '../../logo.png';
import firebase from 'react-native-firebase'

class Loading extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      spinValue: new Animated.Value(1),
      count: 0,
      showText:''
    }
    Animated.loop(Animated.timing(
      this.state.spinValue,
      {
        toValue: 1000,
        duration: 1000,
        easing: Easing.linear
      }
    )).start()
    setInterval(() => {
      const text = 'Loading...';
      if(this.state.count === text.length+1)
      {
        this.setState({count: 0})
      }
      this.setState({count: this.state.count+1,
      showText: text.substring(0,this.state.count)})

    }, 400);
  }


  onClick = () => {
    const wasRotated = this.state.spinValue._value === 1;

  }

  render(){

    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return(
      <View style={styles.container}>
          <Animated.Image source={logo} style={[styles.logo, { transform: [{rotate: spin}] }]}/>

          <Image source={require('../../loadingCorgi.gif')} />
          <Text style={styles.text}>{this.state.showText}</Text>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff5a36',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  text: {
    color: 'white',
    fontSize: 40,
  }
});


export default Loading;
