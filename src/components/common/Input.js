import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle } = styles;
  return (


      <TextInput
         secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      / >

 );
};
const styles = {
  inputStyle: {
    color: '#000',
    marginRight: 5,
    marginLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labeStyle: {
    fontSize: 30,
    paddingLeft: 20,
    flex: 1
  },
  containerStyles: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    align: 'center'
  }
};

export { Input };
