import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Styles } from './Styles';

class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text>Login</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>Go to SignUp</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export { Login };
