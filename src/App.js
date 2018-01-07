import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {login} from './Utils/Api';

export default class App extends Component {

  constructor(props) {
    super(props);
    this._login = this._login.bind(this);
  }

  _login() {
    login(Math.random())
      .then(token => {
        console.log(token);
      })
      .catch((e) => {
        console.log('error');
      });
  }

  render() {
    return (
      <View>
          <TouchableOpacity style={{marginTop: 20}} onPress={this._login}>
            <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}