import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { Styles } from './Styles';

class Profile extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          
        }
    }

    render() {
        return (
            <View style={Styles.container}>
               <Text>Profile</Text>
            </View>
        );
    }
}

export { Profile };
