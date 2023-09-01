import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// components
import { Button } from '../components/Button'

// theme
import { Colors } from '../theme/Colors'

export const Menu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 10, backgroundColor: Colors.black, paddingHorizontal: 20, paddingTop: StatusBar.currentHeight }}>
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 50, marginBottom: 50 }}>Math Right</Text>
      <Button
        title="Jogar"
        onPress={() => navigation.push('Modos')}
        buttonColor={Colors.blue}
        textColor='white'
      />
      <Button
        title="Configurações"
        onPress={() => navigation.push('Config')}
        buttonColor={Colors.blue}
        textColor='white'
      />
      <StatusBar theme='light' />
    </View>
  );
}
