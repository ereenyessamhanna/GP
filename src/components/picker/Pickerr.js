import React , { Component } from 'react';

import { Button, View, Picker, Alert } from 'react-native';

import { Styles } from './Styles';

class Pickerr extends Component {

  constructor() {

    super();
    this.state = { PickerSelectedVal: '' };
   
  }

  getSelectedPickerValue = () => {

    Alert.alert("Selected Item IS : " + this.state.PickerSelectedVal);

  };

  render() {
    return (

    <View style={Styles.pickerStyle}>
      <Picker selectedValue={this.state.PickerSelectedVal} 
      onValueChange={(itemValue, itemindex) => this.setState({ PickerSelectedVal: itemValue })}>
      
        <Picker.Item label="item 1" value="item 1" />
        <Picker.Item label="item 2" value="item 2" />
        <Picker.Item label="item 3" value="item 3" />
        <Picker.Item label="item 4" value="item 4" />
        <Picker.Item label="item 5" value="item 5" />
        <Picker.Item label="item 6" value="item 6" />

      </Picker>

      <Button title="Get Selected Value " onPress={this.getSelectedPickerValue} />
    </View>
    
    );
  }

  
}

export { Pickerr };
