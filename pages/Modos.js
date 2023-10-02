import React from 'react'

// components
import SafeArea from '../components/SafeArea'
import Button from '../components/Button'

// theme
import { Colors } from '../ui/Colors'

export default function Modos({ navigation }) {
  return (
    <SafeArea>
      <Button
        title="Operações básicas"
        onPress={() => navigation.push('operacoes')}
        buttonColor={Colors.blue}
      />
      <Button
        title="Quiz"
        onPress={() => navigation.push('quiz')}
        buttonColor={Colors.blue}
      />
    </SafeArea>
  )
}
