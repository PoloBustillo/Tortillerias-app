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
  DividerVertical
} from 'react-native';
import logo from '../../logo.png';

class Loading extends React.Component {
  state = {
    spinValue: new Animated.Value(1),
  }

  onClick = () => {
    const wasRotated = this.state.spinValue._value === 1;
    Animated.timing(
      this.state.spinValue,
      {
        toValue: wasRotated ? 0 : 1,
        duration: 250,
        easing: Easing.linear
      }
    ).start()
  }

  render(){

    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return(
      <View style={styles.container}>
          <Animated.Image source={logo} style={[styles.logo, { transform: [{rotate: spin}] }]}/>

          <TouchableHighlight
            onPress={this.onClick}
            style={styles.button}
            underlayColor={'#0A84D0'}
          >
                <Text>Button</Text>
          </TouchableHighlight>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5c17f',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  }
});


export default Loading;
