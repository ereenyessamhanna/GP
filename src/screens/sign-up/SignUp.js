import React, { Component } from 'react';

import {

    View,
    TouchableOpacity,
    Text,
    ImageBackground
} from 'react-native';
import {

    InputText,

    Button

} from '../../components';
import { COLORS } from '../../styling'
import { Styles } from './Styles';
import { firebaseMethods } from '../../firebase/Firebase';

class SignUp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {


            inputs: {

                usrName: { value: "", isValid: true, errorMessage: "" },

                email: { value: "", isValid: true, errorMessage: "" },

                pass: { value: "", isValid: true, errorMessage: "" },

                confirmPass: { value: "", isValid: true, errorMessage: "" }

            }

        }
    }

    renderInputs() {

        let { usrName, email, pass, confirmPass } = this.state.inputs;



        return (

            <View style={Styles.inputContanier}>

                <InputText

                    placeholder={'Username'}

                    underlineColorAndroid={!usrName.isValid ? COLORS.RED : COLORS.Moccasin}

                    onChangeText={(newValue) => this.onValueChange('usrName', newValue)}

                    errorMessage={usrName.errorMessage}

                />

                <InputText

                    placeholder={'Email'}

                    keyboardType={'email-address'}

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

                <InputText

                    placeholder={'Confirm Password'}

                    secureTextEntry={true}

                    underlineColorAndroid={!confirmPass.isValid ? COLORS.RED : COLORS.Moccasin}

                    onChangeText={(newValue) => this.onValueChange('confirmPass', newValue)}

                    errorMessage={confirmPass.errorMessage}

                />

            </View>

        )

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

        let { usrName, email, pass, confirmPass } = this.state.inputs;

        let tempInputs = this.state.inputs;

        let isValidScreen = true;



        if (usrName.value == "") {

            tempInputs['usrName'].isValid = false;

            tempInputs['usrName'].errorMessage = "*Required";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }

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

        if (confirmPass.value == "") {

            tempInputs['confirmPass'].isValid = false;

            tempInputs['confirmPass'].errorMessage = "*Required";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }

        if (pass.value != confirmPass.value) {

            tempInputs['confirmPass'].isValid = false;

            tempInputs['confirmPass'].errorMessage = "*Confirm Password Doesn't match Password";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }



        return isValidScreen;

    }

    onPressSignUp() {

        let isValidScreen = this.isValidScreen();
        if (isValidScreen) {
            firebaseMethods.signUp(this.state.inputs.email.value, this.state.inputs.pass.value, (error, res) => {
                if (error) {
                    console.log('error', error)
                } else {
                    this.props.navigation.navigate('AddSalary');
                }
            })
        }

    }

    renderButton() {

        let { button } = this.state;



        return (

            <Button buttonStyle={button} onPress={() => this.onPressSignUp()}>
                <Text>Sign UP</Text>
            </Button>
        )

    }


    renderBackButton() {

        let { navigation } = this.props;



        return (

            <TouchableOpacity style={Styles.backButtonContainer} onPress={() => navigation.goBack()}>

                <Text>go Back</Text>

            </TouchableOpacity>

        );

    }

    renderImage() {
        return (
            <ImageBackground source={require('./s.jpg')}
                style={Styles.Imagebackground}

            />
        );

    }

    render() {
        let { navigation } = this.props;


        return (


            <View style={Styles.Container}>
                {this.renderImage()}
                {this.renderBackButton()}

                {this.renderInputs()}

                {this.renderButton()}


                <Text

                    onPress={() => navigation.navigate('AddSalary')}
                    style={Styles.addSalary}>
                    AddSalary
                 </Text> 

            </View>

        );

    }

}


export { SignUp };
