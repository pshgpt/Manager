import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spin } from './common';

class LoginForm extends Component {
onEmailChange(text) {
  this.props.emailChanged(text);
  }
onPasswordChange(text) {
  this.props.passwordChanged(text);
}
onButtonPress() {
  const { email, password } = this.props;
  this.props.loginUser({ email, password });
}
renderButton() {
  if (this.props.loading) {
    return <Spin size="large" />;
  }
  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      LogIn
    </Button>
  );
}
  render() {
    return (
      <View>
     <Card>
       <CardSection>
         <Text style={{ fontSize: 20 }}> E-mail </Text>
       </CardSection>
       <CardSection>
         <Input
         keyboardType='email-address'
         placeholder="user@gmail.com"
         onChangeText={this.onEmailChange.bind(this)}
         value={this.props.email}
         />
       </CardSection>
       <CardSection>
         <Text style={{ fontSize: 20 }}> Passsword </Text>
       </CardSection>
       <CardSection>
         <Input
             secureTextEntry
             placeholder="password"
             onChangeText={this.onPasswordChange.bind(this)}
             value={this.props.password}
         />
       </CardSection>
  <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}> {this.props.error}</Text>

       <CardSection>
        {this.renderButton()}
       </CardSection>

     </Card>
    </View>

    );
  }
}
const mapStateToProps = state => {
  return {
          email: state.auth.email,
          password: state.auth.password,
          error: state.auth.error,
          loading: state.auth.loading
  };
};
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
