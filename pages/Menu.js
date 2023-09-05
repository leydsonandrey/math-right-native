import React from 'react';
import { View } from 'react-native';

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
        <Logo width="auto" height="auto" />
      </View>
      <Button
        title="Jogar"
        onPress={() => navigation.push('Modos')}
        buttonColor={Colors.blue}
        textColor='white'
      />
    </SafeArea>
  );
}
