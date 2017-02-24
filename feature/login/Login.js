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
  Alert,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {username: ''};
      this.state = {password: ''};
      this.state = {result: ''};

      // bind event
      this.onButtonLoginPress = this.onButtonLoginPress.bind(this);
    }

    onButtonLoginPress(){
       if(this.state.username == 'vinh' && this.state.password == '123'){
         Alert.alert('Login Success');
       } else {
         Alert.alert('Login failed!');
       }
    };

    render() {
        return (

            <Image
                source={require('../../images/bg_login.jpg')}
                style={loginStyles.backgroundApp}>
                <View style={{flex : 1, flexDirection: 'column', alignItems:'center'}}>

                  <View style={{flex : 1, justifyContent: 'center'}}>
                      <Image source={require('../../images/icon_login.png')}
                        style={loginStyles.backgroundImage}/>
                  </View>

                  <View style={{flex : 1, justifyContent: 'flex-start', flexDirection: 'column'}}>
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
                      style={{width: 100}}
                      onPress={this.onButtonLoginPress}
                      title="Login"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"/>


                    <TouchableNativeFeedback>
                      <Text>
                        TouchableNativeFeedback
                      </Text>
                    </TouchableNativeFeedback>

                    <Text style={{paddingTop : 10}}>
                      AAA : {this.state.username}/{this.state.password}
                    </Text>
                  </View>
                </View>
            </Image>

        );
    }
}


let loginStyles = StyleSheet.create({
  backgroundImage: {
    width : 100,
    height : 100
  },

  backgroundApp: {
      flex:1,
      width: null,
      height: null
  }
});
