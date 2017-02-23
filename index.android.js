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
  View,
  Image
} from 'react-native';

import Login from './feature/login/Login'

class Greeting extends Component {

    constructor(props){
      super(props);

      this.state = {isShowText : true}

      setInterval(() => {
        this.setState({isShowText : !this.state.isShowText})
      }, 1000);
    }


    render() {
        let display = this.state.isShowText ? this.props.textContent : ' ';

        return (
            <Text style={myColorStyle.red}>{display}</Text>
        );
    }
}

const myColorStyle = StyleSheet.create({
  red: {
    fontWeight : 'bold',
    fontSize : 30,
    color : '#F00'
  }
})

export default class HelloWorldApp extends Component {
  render() {
      return (
      // <View style={{
      //     flex : 1,
      //     flexDirection: 'row',
      //     alignItems: 'center'}}>
      //   <View style={{flex : 1, backgroundColor: '#CCC'}}><Greeting textContent="Hello world!!!" /></View>
      //   <View style={{flex : 1, backgroundColor: '#0F0'}}><Greeting textContent="What the hell!!!" /></View>
      // </View>
        <Login />
      );
    }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
