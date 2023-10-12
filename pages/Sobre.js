import React from 'react'
import { View, Text, Linking } from 'react-native'

// ui
import SafeArea from '../ui/SafeArea'
import Button from '../ui/Button'
import { Colors } from '../ui/Colors'

export default function Operacoes() {
  return (
    <SafeArea>
      <Button
        title="Github"
        onPress={() => Linking.openURL('https://github.com/andrey-tar-xz/math-right')}
        buttonColor={Colors.blue}
      />
      <View style={{ marginVertical: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Feito com ❤ por Leydson Andrey</Text>
      </View>
    </SafeArea >
  )
}
