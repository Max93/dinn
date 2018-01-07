import React, {PureComponent} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../Utils/Api';
import {restoreSession, logout} from '../Stores/actions';

class LoginButton extends PureComponent {

    constructor(props) {
        super(props);
        this._login = this._login.bind(this);
        this._logout = this._logout.bind(this);
    }

    _login() {
        login('')
            .then(token => {
                this.props.saveToken(token);
            });
    }

    _logout() {
        this.props.logout();
    }

    render() {
        return (
            <TouchableOpacity style={{marginTop: 20}} onPress={this.props.logged ? this._logout : this._login}>
                <Text>{this.props.logged ? 'LOGOUT' : 'LOGIN'}</Text>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.session.token
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        saveToken: (token) => dispatch(restoreSession(token)),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
