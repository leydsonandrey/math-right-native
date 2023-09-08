import React from 'react';
import { View, Linking } from 'react-native';

// components
import { Button } from '../components/Button'
import { SafeArea } from '../components/SafeArea'

// theme
import { Colors } from '../theme/Colors'
import Logo from '../assets/logo_svg'

export const Menu = ({ navigation }) => {
  return (
    <SafeArea isScrollView={false}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
        <Logo />
      </View>
      <Button
        title="Jogar"
        onPress={() => navigation.push('Modos')}
        buttonColor={Colors.blue}
        textColor='white'
      />
      <Button
        title="Bug/Sugestão"
        onPress={() => Linking.openURL('https://forms.gle/G5wgLNFXUSqoY8QM9')}
        buttonColor={Colors.blue}
        textColor='white'
      />
    </SafeArea>
  );
}
