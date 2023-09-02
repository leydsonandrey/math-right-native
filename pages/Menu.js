import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// components
import { Button } from '../components/Button'
import { SafeArea } from '../components/SafeArea'

// theme
import { Colors } from '../theme/Colors'

export const Menu = ({ navigation }) => {
  return (
    <SafeArea isScrollView={false}>
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 50, marginBottom: 40 }}>Math Right</Text>
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
    </SafeArea>
  );
}
