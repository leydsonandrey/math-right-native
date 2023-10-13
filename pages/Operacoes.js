import React, { useState } from 'react'
import { Text, Switch, Pressable, StyleSheet } from 'react-native'

// ui
import SafeArea from '../ui/SafeArea'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { Colors } from '../ui/Colors'

function ButtonRouter({ type, title, selectedValue, negativo, navigation }) {
  return (
    <Button
      title={title}
      onPress={() => navigation.navigate('Play', {
        maximo: selectedValue, type: type, negativo: negativo
      })}
      buttonColor={Colors.blue}
    />
  )
}

export default function Operacoes({ navigation }) {
  const [input, setInput] = useState('')
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  if (/^(?=.*[a-zA-Z])[a-zA-Z]{1,}$/.test(input)) {
    setInput(input.replace(/^(?=.*[a-zA-Z])[a-zA-Z]{1,}$/, ''))
  } else if (/^(?=.*\d)(?=.*[a-zA-Z])[\d\w]{1,}$/.test(input)) {
    setInput(input.replace(/^(?=.*\d)(?=.*[a-zA-Z])[\d\w]{1,}$/, ''))
  }

  return (
    <SafeArea>
      <Text style={{ color: 'white', fontSize: 16 }}>Valor máximo:</Text>
      <Input
        value={input}
        onChangeText={setInput}
        maxLength={10}
        color={'white'}
        placeholder={'Digite aqui...'}
        defaultValue={10}
        noAutoFocus
        blurOnSubmit
      />

      <Pressable onPress={toggleSwitch} style={styles.buttonContainer}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Números negativos</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#767577' }}
          thumbColor={isEnabled ? Colors.blue : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Pressable>
      <ButtonRouter type={'soma'} title={'Soma'} negativo={isEnabled} selectedValue={input} navigation={navigation} />
      <ButtonRouter type={'subt'} title={'Subtração'} negativo={isEnabled} selectedValue={input} navigation={navigation} />
      <ButtonRouter type={'mult'} title={'Multiplicação'} negativo={isEnabled} selectedValue={input} navigation={navigation} />
      <ButtonRouter type={'divi'} title={'Divisão'} negativo={isEnabled} selectedValue={input} navigation={navigation} />
      <ButtonRouter type={'raiz2'} title={'Raiz quadrada'} negativo={isEnabled} selectedValue={input} navigation={navigation} />
      <ButtonRouter type={'pont2'} title={'Expoente 2'} negativo={isEnabled} selectedValue={input} navigation={navigation} />
      <ButtonRouter type={'pont3'} title={'Expoente 3'} negativo={isEnabled} selectedValue={input} navigation={navigation} />
    </SafeArea >
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.jet,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
})

