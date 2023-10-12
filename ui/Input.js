import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Colors } from './Colors'

export default function Input({
  value,
  onSubmitEditing,
  onChangeText,
  maxLength,
  color,
}) {

  let inputColor = styles.inputDefault
  if (color) {
    inputColor = styles.inputGreen
  } else if (color === false) {
    inputColor = styles.inputRed
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, inputColor]}
        value={value}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        maxLength={maxLength}
        autoFocus={true}
        blurOnSubmit={false}
        inputMode='numeric'
        cursorColor={'#fff'}
      />
    </View>
  )
}

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
})

