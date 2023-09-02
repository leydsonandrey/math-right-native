import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

// components
import { SafeArea } from '../components/SafeArea'

// theme
import { Colors } from '../theme/Colors'

export const Config = () => {
  return (
    <SafeArea background={Colors.black}>
      <View style={styles.container}>
        <Text style={styles.text}>TESTE</Text>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
})

