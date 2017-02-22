/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.username}</Text>
        );
    }
}


export default class HelloWorldApp extends Component {
  render() {
      return (
      <View style={{alignItems: 'center'}}>
        <Greeting username="Vinh 1" />
        <Greeting username="Vinh 2" />
      </View>
      );
    }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
