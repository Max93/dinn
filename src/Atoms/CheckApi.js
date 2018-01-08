import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {check} from '../Utils/Api';

class CheckApi extends Component {

    constructor(props) {
        super(props);
        this.state = {check: 0};
        this._check = this._check.bind(this);
    }

    _check() {
        check()
            .then(() => this.setState({
                check: 2
            }))
            .catch(() => this.setState({
                check: 1
            }));
    }

    render() {
        let message = '';

        switch(this.state.check) {
            case 0:
                message = 'Not checked';
                break;
            case 1:
                message = 'Error';
                break;
            case 2:
                message = 'Success';
                break;
        } 
        return (
            <TouchableOpacity style={{marginTop: 20}} onPress={this._check}>
                <Text>{message}</Text>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.session.token
    }
  };
  
  export default connect(mapStateToProps)(CheckApi);
  