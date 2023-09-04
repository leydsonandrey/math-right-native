import React from 'react';
import { Image, View } from 'react-native';

// components
import { Button } from '../components/Button'
import { SafeArea } from '../components/SafeArea'

// theme
import { Colors } from '../theme/Colors'

export const Menu = ({ navigation }) => {
  return (
    <SafeArea isScrollView={false}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{
            height: 511 / 3,
            width: 994 / 3,
            resizeMode: 'contain'
          }}
          source={require('../assets/icon_menu.png')}
        />
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
