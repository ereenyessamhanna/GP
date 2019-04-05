
  import React, { Component } from 'react'
  import DatePicker from 'react-native-datepicker'
  
 class DatePicker1 extends Component {
    constructor(props){
      super(props)
      this.state = {date:new Date()}
    }
  
    render(){
      return (
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
         // minDate="2019-01-01"
         // maxDate="2019-12-30"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      )
    }
  }

  export { DatePicker1 };
