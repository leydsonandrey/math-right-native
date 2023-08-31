import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Colors } from '../theme/Colors'

export const Input = ({
  value,
  placeholder,
  onSubmitEditing,
  onChangeText,
  maxLength,
  color,
}) => {

  let buttonStyle = styles.inputDefault
  if (color) {
    buttonStyle = styles.inputGreen
  } else if (color === false) {
    buttonStyle = styles.inputRed
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, buttonStyle]}
        value={value}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        maxLength={maxLength}
        autoFocus={true}
        blurOnSubmit={false}
        keyboardType='number-pad'
        cursorColor={'#fff'}
        placeholderTextColor={'black'}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
    color: 'white',
    backgroundColor: Colors.jet,
    borderBottomWidth: 10
  },
  inputDefault: {
    borderColor: 'white',
  },
  inputGreen: {
    borderColor: Colors.green,
  },
  inputRed: {
    borderColor: Colors.red,
  }
});

