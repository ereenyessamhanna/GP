import React, { Component } from 'react';

import {

    TouchableOpacity

   
} from 'react-native';

import { Styles } from './Styles';



class Button extends Component {



    constructor(props) {

        super(props);

        this.state = {

        }

    }



    render() {

        let {  onPress } = this.props;



        return (

            <TouchableOpacity style={Styles.button} onPress={() => onPress()}>

                {this.props.children}

            </TouchableOpacity>

        );

    }

}



export { Button };