import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Styles } from './Styles';

class SignUp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text>sign up</Text>
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('AddSalary')}>
                    <Text>Go to AddSalary</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export { SignUp };
