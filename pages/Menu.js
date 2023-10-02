import React from 'react'
import { View, Linking } from 'react-native'

// components
import Button from '../components/Button'
import SafeArea from '../components/SafeArea'

// theme
import { Colors } from '../ui/Colors'
import Logo from '../assets/logo_svg'

export default function Menu({ navigation }) {
  return (
    <SafeArea notScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
        <Logo />
      </View>
      <Button
        title="Jogar"
        onPress={() => navigation.push('modos')}
        buttonColor={Colors.blue}
      />
      <Button
        title="Bug/Sugestão"
        onPress={() => Linking.openURL('https://forms.gle/G5wgLNFXUSqoY8QM9')}
        buttonColor={Colors.blue}
      />
    </SafeArea>
  )
}
