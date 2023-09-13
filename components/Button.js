import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default function Button({ onPress, title, buttonColor, textColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer(buttonColor)}>
      <Text selectable={false} style={styles.buttonText(textColor)}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: (color) => ({
    backgroundColor: color,
    paddingVertical: 20,
    borderRadius: 10,
  }),
  buttonText: (color) => ({
    color: color ? color : 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }),
})

