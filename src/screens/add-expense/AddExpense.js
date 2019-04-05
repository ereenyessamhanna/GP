
import React, { Component } from 'react';
import { COLORS } from '../../styling';
import {
    View,
    Picker ,
    Text ,
   // AsyncStorage

} from 'react-native';

import {

    DatePicker1, InputText 
   
  

} from '../../components';

import { Styles } from './Styles';
import { Header ,Input , CheckBox , Button } from 'react-native-elements';
import  {firebaseMethods} from '../../firebase/Firebase';
import { RadioButton } from 'react-native-paper';
//import { accessSync } from 'fs';

class AddExpense  extends Component {

    constructor(props, context) {
       

        super(props, context);
         
        this.state = {
            arrItems: { "item 1": "item 1", "item 2 ": "item 2"},

       show :false ,
       PickerSelectedVal: '' ,
       checked: 'first',

            inputs: {

                title: { value: "", isValid: true, errorMessage: "" },
                type: { value: "", isValid: true, errorMessage: "" },
                other: { value: "", isValid: true, errorMessage: "" },
                periodically: { value: "", isValid: true, errorMessage: "" },
                startDate: { value: "", isValid: true, errorMessage: "" },
                endDate: { value: "", isValid: true, errorMessage: "" },
                cost: { value: "", isValid: true, errorMessage: "" },
                notify : { value: "", isValid: true, errorMessage: "" } ,
               // PickerSelectedVal : { value: "", isValid: true, errorMessage: "" }

            }
        }

        this.toggelView= this.toggelView.bind(this) 

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

        let { title, type , other  ,periodically,startDate ,endDate , cost ,notify } = this.state.inputs;
       
        let tempInputs = this.state.inputs;

        let isValidScreen = true;


        if (title.value == "") {

            tempInputs['title'].isValid = false;

            tempInputs['title'].errorMessage = "*Required";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        } 


        if (cost.value == "") {

            tempInputs['cost'].isValid = false;

            tempInputs['cost'].errorMessage = "*Required";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }
        else if (isNaN(cost.value) ) {

            tempInputs['cost'].isValid = false;

            tempInputs['cost'].errorMessage = "*Invalid cost";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }
        // if (type.value == "") {
            
        //     tempInputs['type'].isValid = false;

        //     tempInputs['type'].errorMessage = "*Invalid type";

        //     this.setState({ inputs: tempInputs });

        //     isValidScreen = false;
        // }
        if (other.value == "") {

            tempInputs['other'].isValid = false;

            tempInputs['other'].errorMessage = "*Required";

            this.setState({ inputs: tempInputs });

            isValidScreen = false;

        }



        return isValidScreen;

    }

    getSelectedPickerValue = () => {

        Alert.alert("Selected Item IS : " + this.state.inputs);
    
      };

    onPressAddExpense() {
       
        
        let { title, type ,other  ,periodically,startDate ,endDate , cost ,notify } = this.state.inputs;

    
        let isValidScreen = this.isValidScreen();
        if (isValidScreen)
        {
            firebaseMethods.addExpense( title.value, cost.value , other.value ,(error,res) => {
                if(error){
                    console.log('error' ,error);
                  
                }
                else{
                     console.log('response' , res);
                    // AsyncStorage.setItem('user' , JSON.stringify(res.id))
                    this.props.navigation.navigate('Dashboard');
                    // .then((userstr) => {
                    //     this.props.navigation.navigate('Dashboard',{ user :res.id} );
                        
                  

                    // })
                }
            })
        }

    }
othersFun( value){

    if(value=="other" ){
        <InputText placeholder="others"/>
    }
}

    renderInputs() {

        let { title, type ,other  ,periodically,startDate ,endDate , cost ,notify } = this.state.inputs;
    
        const { checked } = this.state;

    
        return (
    
            <View >
            <Header
              // leftComponent={{ icon: 'menu', color: '#fff' }}
               centerComponent={{ text: 'Add Expense', style: { color: '#fff' } }}
              // rightComponent={{ icon: 'home', color: '#fff' }}
                  />

                <Input
                    placeholder='Your Title'
                    underlineColorAndroid={!title.isValid ? COLORS.RED : COLORS.BABY_BLUE}
                    onChangeText={(newValue) => this.onValueChange('title', newValue)}
                    errorMessage={title.errorMessage}
                     />



  
    
     <Picker selectedValue={this.state.PickerSelectedVal} 
   onValueChange= {(itemValue) => this.setState({ PickerSelectedVal: itemValue })   }>

   

         {Object.keys(this.state.arrItems).map((key, index) =>
            <Picker.Item label={key} value={key} key={index} />
          )}
        
      </Picker>
      

      <Button
        onPress ={this.toggelView}
        title ='other' />
        {this.state.show &&  <Input
                      
            placeholder='Other'
            underlineColorAndroid={!other.isValid ? COLORS.RED : COLORS.BABY_BLUE}
            onChangeText={(newValue) => this.onValueChange('other', newValue)}
            errorMessage={other.errorMessage}
             /> }
       
            {/* {this.state.show &&  <Input
                      
                    placeholder='Other'
                    underlineColorAndroid={!other.isValid ? COLORS.RED : COLORS.BABY_BLUE}
                    onChangeText={(newValue) => this.onValueChange('other', newValue)}
                    errorMessage={other.errorMessage}
                     /> }
           */}
      
                 <Input  
                    placeholder='Expense Cost'
                    underlineColorAndroid={!cost.isValid ? COLORS.RED : COLORS.BABY_BLUE}
                    onChangeText={(newValue) => this.onValueChange('cost', newValue)}
                    errorMessage={cost.errorMessage}
                />
            <View style ={{flexDirection:"row" }}>
            <Text > periodically </Text>
              <View style ={{ flexDirection:"row"  , marginLeft:20 }}>

        <Text> YES </Text>
        <RadioButton
         
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
                <Text> NO  </Text>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second' }); }}
        />
      </View>
      </View>
      
             <DatePicker1/>  
             
             <DatePicker1/>
            

           <CheckBox
            center
            title='Notify Me'
            checked={this.state.checked}
            />
          
         

           </View>
        )
    
    }

    renderButton() {

       let { button } = this.state;
    
    
    
        return (

       <Button
           title="Save"
          type="outline" // not solid
          onPress={() => this.onPressAddExpense()}
            /> /*
            <Button buttonStyle={button} onPress={() => this.onPressAddExpense()}>
            <Text>Add Expense </Text>
               </Button>*/
        )
       
    
    }

   

    toggelView() {

   const {show } =this.state ;
   this.setState({show : ! show})

    }
   
    render() {
       

        return (
            <View style={Styles.container}>
        
                 {this.renderInputs()}
                 {this.renderButton()}
                
               
            </View>
        );
    }
}

export {AddExpense};
