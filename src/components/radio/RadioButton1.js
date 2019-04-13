import   React , { Component }  from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

class RadioButton1 extends Component {
    
  state = {
    checked: 'first',
  };

  render() {
    const { checked } = this.state;

    return (
      <View>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second' }); }}
        />
      </View>
    );
  }
}
export { RadioButton1 } ;