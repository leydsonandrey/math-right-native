import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export const Button = ({ onPress, title, buttonColor, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, styles.buttonContainer(buttonColor)]}>
      <Text selectable={false} style={styles.buttonText(textColor)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: (color) => ({
    backgroundColor: color,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  }),
  buttonText: (color) => ({
    color: color,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }),
});

