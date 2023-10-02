import React from 'react'

// ui
import SafeArea from '../ui/SafeArea'
import Button from '../ui/Button'
import { Colors } from '../ui/Colors'

export default function Modos({ navigation }) {
  return (
    <SafeArea>
      <Button
        title="Operações básicas"
        onPress={() => navigation.push('operacoes')}
        buttonColor={Colors.blue}
      />
    </SafeArea>
  )
}
