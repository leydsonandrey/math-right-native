import React from 'react';
import { Text, StyleSheet } from 'react-native'

// components
import { SafeArea } from '../components/SafeArea'

export const Config = () => {
  return (
    <SafeArea isScrollView>
      <Text style={styles.text}>TESTE</Text>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white'
  },
})

