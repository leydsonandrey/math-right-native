import React, { useState } from 'react'
import { Text, Switch, Pressable, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-picker/picker'

// ui
import SafeArea from '../ui/SafeArea'
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
  const [selectedValue, setSelectedValue] = useState(10);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
      <ButtonRouter type={'soma'} title={'Soma'} negativo={isEnabled} selectedValue={selectedValue} navigation={navigation} />
      <ButtonRouter type={'subt'} title={'Subtração'} negativo={isEnabled} selectedValue={selectedValue} navigation={navigation} />
      <ButtonRouter type={'mult'} title={'Multiplicação'} negativo={isEnabled} selectedValue={selectedValue} navigation={navigation} />
      <ButtonRouter type={'divi'} title={'Divisão'} negativo={isEnabled} selectedValue={selectedValue} navigation={navigation} />
      <ButtonRouter type={'raiz2'} title={'Raiz quadrada'} negativo={isEnabled} selectedValue={selectedValue} navigation={navigation} />
      <ButtonRouter type={'pont2'} title={'Expoente 2'} negativo={isEnabled} selectedValue={selectedValue} navigation={navigation} />
      <ButtonRouter type={'pont3'} title={'Expoente 3'} negativo={isEnabled} selectedValue={selectedValue} navigation={navigation} />
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

