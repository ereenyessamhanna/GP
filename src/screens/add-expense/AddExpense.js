import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { Styles } from './Styles';

class AddExpense extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          
        }
    }

    render() {
        return (
            <View style={Styles.container}>
               <Text>Add Expense</Text>
            </View>
        );
    }
}

export { AddExpense };
