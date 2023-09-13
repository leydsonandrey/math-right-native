import React from 'react'

// components
import SafeArea from '../components/SafeArea'
import Button from '../components/Button'

// theme
import { Colors } from '../theme/Colors'

export function Quiz({ navigation }) {
  return (
    <SafeArea>
      <Button
        title="Regra de sinais"
        onPress={() => navigation.push('game', {
          type: 'regraSinais'
        })}
        buttonColor={Colors.blue}
      />
    </SafeArea>
  )
}
