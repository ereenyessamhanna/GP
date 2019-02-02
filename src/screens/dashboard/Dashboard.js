import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { Styles } from './Styles';

class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          
        }
    }

    render() {
        return (
            <View style={Styles.container}>
               <Text>Dashboard</Text>
               <TouchableOpacity onPress={() =>this.props.navigation.navigate('AddPlan')}>
                    <Text>Go to Add plan</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('AddExpense')}>
                    <Text>Go to Add expense</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export { Dashboard };
