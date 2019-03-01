import React, { Component } from 'react';

import {

    View,

    TextInput,

    Text

} from 'react-native';

import { Styles } from './Styles';

import { COLORS } from '../../styling';



class InputText extends Component {



    constructor(props, context) {

        super(props, context);

        this.state = {

            color: COLORS.Magenta

        }

    }



    render() {



        let {
            
            label,

            placeholder,

            secureTextEntry,

            underlineColorAndroid,

            onChangeText,

            value,

            errorMessage,

          
        } = this.props;

       
          const { mainContainer, labelStyle} = Styles;

        return (
           
            <View style={mainContainer}>
            <Text style={labelStyle}>{label}</Text>

                <TextInput
                 
                
                    value={value}

                    underlineColorAndroid={underlineColorAndroid ? underlineColorAndroid : this.state.color}

                    placeholderTextColor={COLORS.Magenta}
                    autoCorrect={false}

                    onChangeText={(newValue) => onChangeText(newValue)}

                    style={ Styles.input}

                    secureTextEntry={secureTextEntry}

                    placeholder={placeholder} />

               
                    {errorMessage ? 
                    <Text style={Styles.errorText}>{errorMessage}</Text>
                    : null
                    }

               



            </View>

        );

    }

}



export { InputText };