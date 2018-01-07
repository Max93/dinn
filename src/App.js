import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {login} from './Utils/Api';

import LoginButton from './Atoms/LoginButton';

class App extends PureComponent {
  render() {
    return (
      <View>
          <LoginButton />
          <Text style={{marginTop: 20}}>{this.props.logged ? 'User Logged' : 'User not Logged'}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      logged: state.session.token
  }
};

export default connect(mapStateToProps)(App);
