import React, { Component } from 'react';

import {

    View,

    Text,

    TouchableOpacity,
    ImageBackground
    

} from 'react-native';

import {

    InputText,

    Button

    
} from '../../components';

import  { Icon }  from 'react-native-elements';
import { COLORS } from '../../styling'
//import Icon from 'react-native-vector-icons';
import { Styles } from './Styles';

class AddSalary extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          

            inputs: {

                addSalary: { value: "", isValid: true, errorMessage: "" }

            }
          
        }
    }

    onValueChange(key, newValue) {

        let { inputs } = this.state;

        let tempInputs = inputs;

        tempInputs[key].value = newValue;

        if (newValue == "") {

            tempInputs[key].isValid = false;

            tempInputs[key].errorMessage = "*Required";

        } else {

            tempInputs[key].isValid = true;

            tempInputs[key].errorMessage = "";

        }



        this.setState({ inputs: tempInputs });

    }

    isValidScreen() {

        let { addSalary } = this.state.inputs;

        let tempInputs = this.state.inputs;

        let isValidScreen = true;



        if (addSalary.value == "") {

            tempInputs['addSalary'].isValid = false;

            tempInputs['addSalary'].errorMessage = "*Required";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }
        else if (isNaN(addSalary.value) ) {

            tempInputs['addSalary'].isValid = false;

            tempInputs['addSalary'].errorMessage = "*Invalid Add Salary";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }
        return isValidScreen;

    }

    onPressAddSalary() {

         
       

        let isValidScreen = this.isValidScreen();


    }


    renderimg() {
        return(
            
            <Icon 
            reverse
            name='ios-clock'
            type='ionicon'
            color='#D3D3D3' />
           
           
        );
    }

    renderInputs() {

        let { addSalary } = this.state.inputs;
    
    
    
        return (
    
            <View style={Styles.inputContanier}>
           
    
                <InputText
                  
    
                   
    
                    placeholder={'addSalary'}
    
                    underlineColorAndroid={!addSalary.isValid ? COLORS.RED : COLORS. SILVER}
                    
                    onChangeText={(newValue) => this.onValueChange('addSalary', newValue)}
    
                    errorMessage={addSalary.errorMessage}
    
                />
    
           </View>
        )
    
    }

    renderButton() {

       let { button } = this.state;
    
    
    
        return (
    
            <Button buttonStyle={button} onPress={() => this.onPressAddSalary()}>
            <Text>Add Salary</Text>
               </Button>
        )
       
    
    }


    renderBackButton() {

        let { navigation } = this.props;



        return (

            <TouchableOpacity style={Styles.backButtonContainer} onPress={() => navigation.goBack()}>

              <Text>go back</Text>

            </TouchableOpacity>

        );

    }

    renderImage() {
        return(
        <ImageBackground source={require('./E.gif')}
        style={Styles.Imagebackground}
        
        />
        );
        
    }

    render() {

        return (

            <View style={Styles.Container}>
                {this.renderImage()}

                {this.renderBackButton()}

                {this.renderInputs()}

                {this.renderButton()}

                {this.renderimg()}

            </View>

        );

    }

}

    
    








   /* render() {
        return (
            <View style={Styles.container}>
               <Text>Add salary</Text>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Drawer')}>
                    <Text>Go to DashBoard</Text>
                </TouchableOpacity>
            </View>
        );
    }
}*/



export { AddSalary };
