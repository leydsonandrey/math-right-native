import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function Input({
  value,
  placeholder,
  onSubmitEditing,
  onChangeText,
  maxLength,
  color,
}) {

  let buttonStyle = styles.inputDefault
  if (color == "green") {
    buttonStyle = styles.inputGreen
  } else if (color == "red") {
    buttonStyle = styles.inputRed
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, buttonStyle]}
        value={value}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        placeholder={placeholder}
        maxLength={maxLength}
        autoFocus={true}
        blurOnSubmit={false}
        keyboardType='number-pad'
        cursorColor={'#fff'}
        placeholderTextColor={'#696969'}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    fontSize: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 5,
    borderRadius: 10,
    color: '#fff',
    backgroundColor: '#000',
  },
  inputDefault: {
    borderColor: '#fff'
  },
  inputGreen: {
    borderColor: 'green'
  },
  inputRed: {
    borderColor: 'red'
  }
});

