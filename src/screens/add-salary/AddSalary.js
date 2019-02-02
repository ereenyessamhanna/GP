import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Styles } from './Styles';

class AddSalary extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          
        }
    }

    render() {
        return (
            <View style={Styles.container}>
               <Text>Add salary</Text>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Drawer')}>
                    <Text>Go to DashBoard</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export { AddSalary };
