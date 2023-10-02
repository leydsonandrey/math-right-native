import React, { useState } from 'react'
import { Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'

// components
import SafeArea from '../components/SafeArea'
import Button from '../components/Button'

// theme
import { Colors } from '../ui/Colors'

export default function Operacoes({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(10);
  return (
    <SafeArea>
      <Text style={{ color: 'white', fontSize: 16 }}>Valor máximo:</Text>
      <Picker
        style={{ backgroundColor: 'white', color: 'black', height: 50, borderRadius: 10, fontSize: 16, paddingHorizontal: 10 }}
        mode={'dropdown'}
        dropdownIconColor={'#343434'}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        prompt={'Valor máximo:'}
      >
        <Picker.Item label="10" value={10} />
        <Picker.Item label="100" value={100} />
        <Picker.Item label="1.000" value={1000} />
        <Picker.Item label="10.000" value={10000} />
        <Picker.Item label="100.000" value={100000} />
      </Picker>
      <Button
        title="Soma"
        onPress={() => navigation.push('game', {
          maximo: selectedValue, type: 'soma'
        })}
        buttonColor={Colors.blue}
      />
      <Button
        title="Subtração"
        onPress={() => navigation.push('game', {
          maximo: selectedValue, type: 'subt'
        })}
        buttonColor={Colors.blue}
      />
      <Button
        title="Multiplicação"
        onPress={() => navigation.push('game', {
          maximo: selectedValue, type: 'mult'
        })}
        buttonColor={Colors.blue}
      />
      <Button
        title="Divisão"
        onPress={() => navigation.push('game', {
          maximo: selectedValue, type: 'divi'
        })}
        buttonColor={Colors.blue}
      />
      <Button
        title="Raiz quadrada"
        onPress={() => navigation.push('game', {
          maximo: selectedValue, type: 'raiz2'
        })}
        buttonColor={Colors.blue}
      />
      <Button
        title="Expoente 2"
        onPress={() => navigation.push('game', {
          maximo: selectedValue, type: 'pont2'
        })}
        buttonColor={Colors.blue}
      />
      <Button
        title="Expoente 3"
        onPress={() => navigation.push('game', {
          maximo: selectedValue, type: 'pont3'
        })}
        buttonColor={Colors.blue}
      />
    </SafeArea>
  )
}
