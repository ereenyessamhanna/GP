import React, { Component } from 'react';

import {

    View,

    Text,
    ImageBackground
    

} from 'react-native';
import {

    InputText,

    Button

    

} from '../../components';
import { COLORS } from '../../styling'
import { Styles } from './Styles';
//import PasswordInputText from 'react-native-hide-show-password-input';



class Login extends Component {

    

    constructor(props, context) {

        super(props, context);

        this.state = {

           

            inputs: {

                email: { value: "", isValid: true, errorMessage: "" },

                pass: { value: "", isValid: true, errorMessage: "" },

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

        let { email, pass } = this.state.inputs;

        let tempInputs = this.state.inputs;

        let isValidScreen = true;



        if (email.value == "") {

            tempInputs['email'].isValid = false;

            tempInputs['email'].errorMessage = "*Required";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        } else if (!email.value.includes('@') || !email.value.includes('.')) {

            tempInputs['email'].isValid = false;

            tempInputs['email'].errorMessage = "*Invalid Email Address";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }

        if (pass.value == "") {

            tempInputs['pass'].isValid = false;

            tempInputs['pass'].errorMessage = "*Required";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }



        return isValidScreen;

    }

    onPressLogin() {

    
        let isValidScreen = this.isValidScreen();


    }


   


renderInputs() {

    let { email, pass } = this.state.inputs;



    return (

        <View style={Styles.inputContanier}>
       

            <InputText
                label="email"

               

                placeholder={'E-mail'}

                underlineColorAndroid={!email.isValid ? COLORS.RED : COLORS.Moccasin}
                
                onChangeText={(newValue) => this.onValueChange('email', newValue)}

                errorMessage={email.errorMessage}

            />

              
       
             
            <InputText

                
                
                placeholder={'Password'}

                secureTextEntry={true}

                underlineColorAndroid={!pass.isValid ? COLORS.RED : COLORS.Moccasin}

                onChangeText={(newValue) => this.onValueChange('pass', newValue)}

                errorMessage={pass.errorMessage}

            />
            

        </View>

    )

}



renderButton() {

    let { button } = this.state;



    return (

        <Button  buttonStyle={button}  onPress={() => this.onPressLogin()}>
        
        <Text>login</Text>
        
           </Button>
    )

}


renderImage() {
    return(
    <ImageBackground source={require('./s.jpg')}
    style={Styles.Imagebackground}
    
    />
    );
    
}


render() {

    let { navigation } = this.props;

    return (

        <View style={Styles.mainContainer}>
           
          
            {this.renderImage()}

            {this.renderInputs()}
          
          {this.renderButton()}
         
          <Text

               onPress={() => navigation.navigate('SignUp')}
               style={Styles.signUp}>
               Don't have an account?  SignUp
          </Text>
            
        </View>


        
    );



}

}



export { Login };
