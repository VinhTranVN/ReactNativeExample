/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {username: ''};
      this.state = {password: ''};
      this.state = {result: ''};
    }

    onButtonLoginPress() {
       Alert.alert('Button has been pressed!');
       //this.setState({result : "OK"});
    };

    render() {
        return (
          <View style={{
              flex : 1,
              flexDirection: 'column'}}>
            <View style={{flex : 1, justifyContent: 'center'}}>
                <Image source={require('../../images/icon_login.png')} style={loginStyles.backgroundImage}/>
            </View>
            <View style={{flex : 1, justifyContent: 'flex-start'}}>
              <Text>
                User Name
              </Text>
              <TextInput
                style={{height: 40, width: 150}}
                placeholder="Input User Name!"
                onChangeText={(username) => this.setState({username})}/>

              <Text>Password</Text>
              <TextInput
                style={{height: 40, width: 150}}
                placeholder="Input password!"
                onChangeText={(password) => this.setState({password})}/>

              <Button
                onPress={this.onButtonLoginPress}
                title="Login"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"/>

              <Text style={{paddingTop : 10}}>AAA : {this.state.username}/{this.state.password}</Text>
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
