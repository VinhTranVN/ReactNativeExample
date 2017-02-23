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

export default class Login extends Component {
    render() {
        return (
          <View style={{
              flex : 1,
              flexDirection: 'column',
              alignItems: 'center'}}>
            <View style={{flex : 1, justifyContent: 'center'}}>
                <Image source={require('../../images/icon_login.png')} style={loginStyles.backgroundImage}/>
            </View>
            <View style={{flex : 1, justifyContent: 'center', backgroundColor:'#f00'}}>
                <Image source={require('../../images/icon_login.png')} style={loginStyles.backgroundImage}/>
            </View>
          </View>
        );
    }
}


let loginStyles = StyleSheet.create({
  backgroundImage: {
    width : 100,
    height : 100,
    //resizeMode: 'cover', // or 'stretch'
  }
});
