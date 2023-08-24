import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export const Button = ({ onPress, title, buttonColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, styles.buttonContainer(buttonColor)]}>
      <Text selectable={false} style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  buttonContainer: (color) => ({
    backgroundColor: color,
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  }),
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default Button;
