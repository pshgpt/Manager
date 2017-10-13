import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { employeeDetails, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class CreateEmployee extends Component {
  componentWillMount() {
    this.props.employeeDetails({ prop: 'name', value: '' });
    this.props.employeeDetails({ prop: 'phone', value: '' });
    this.props.employeeDetails({ prop: 'shift', value: 'Monday' });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  render() {
    return (
      <View>
     <Card>
    <EmployeeForm {...this.props} />
       <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Create
        </Button>
       </CardSection>

     </Card>
    </View>

    );
  }
}
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeDetails, employeeCreate })(CreateEmployee);
