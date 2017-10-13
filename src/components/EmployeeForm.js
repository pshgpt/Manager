import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { employeeDetails } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {

  renderPickerItems() {
    const days = [
      'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];
    return days.map((day) => <Picker.Item key={day} label={day} value={day} />);
}
  render() {
    return (
      <View>

       <CardSection>
         <Text style={{ fontSize: 20 }}> Name </Text>
       </CardSection>

       <CardSection>
         <Input
         placeholder="name"
         value={this.props.name}
         onChangeText={text => this.props.employeeDetails({ prop: 'name', value: text })}
         />
       </CardSection>

       <CardSection>
         <Text style={{ fontSize: 20 }}> Number </Text>
       </CardSection>

       <CardSection>
         <Input
             placeholder="555-555"
             value={this.props.phone}
             onChangeText={text => this.props.employeeDetails({ prop: 'phone', value: text })}
         />

       </CardSection>

       <CardSection>
          <Text style={{ fontSize: 20 }}> Shift </Text>
       </CardSection>

       <CardSection>
        <Picker
           style={{ flex: 1 }}
           selectedValue={this.props.shift}
           onValueChange={text => this.props.employeeDetails({ prop: 'shift', value: text })}
        >
        {this.renderPickerItems()}
        </Picker>
       </CardSection>
   </View>

    );
  }
}
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeDetails })(EmployeeForm);
