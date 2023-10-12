import React from 'react'
import {
  Text,
  StyleSheet,
  Pressable
} from 'react-native'

import { Colors } from './Colors'

export default function Button({ onPress, title, buttonColor, textColor }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      {
        backgroundColor: pressed ? Colors.darkBlue : buttonColor,
      },
      styles.buttonContainer]}>
      <Text selectable={false} style={styles.buttonText(textColor)}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonText: (color) => ({
    color: color ? color : 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  }),
})

