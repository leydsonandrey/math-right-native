import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker';

// components
import { SafeArea } from '../components/SafeArea'
import { Button } from '../components/Button'

// theme
import { Colors } from '../theme/Colors'

export const Modos = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(10);
  return (
    <SafeArea background={Colors.black}>
      <View style={{ flex: 1, justifyContent: 'center', gap: 15 }}>
        <Text style={{ color: 'white', fontSize: 16, marginTop: 20 }}>Valor máximo:</Text>
        <Picker
          style={{ backgroundColor: 'white', color: 'black' }}
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
          onPress={() => navigation.push('Game', {
            maximo: selectedValue, type: 'soma'
          })}
          buttonColor={Colors.blue}
          textColor='white'
        />
        <Button
          title="Multiplicação"
          onPress={() => navigation.push('Game', {
            maximo: selectedValue, type: 'mult'
          })}
          buttonColor={Colors.blue}
          textColor='white'
        />
        <Button
          title="Divisão"
          onPress={() => navigation.push('Game', {
            maximo: selectedValue, type: 'divi'
          })}
          buttonColor={Colors.blue}
          textColor='white'
        />
        <Button
          title="Subtração"
          onPress={() => navigation.push('Game', {
            maximo: selectedValue, type: 'subt'
          })}
          buttonColor={Colors.blue}
          textColor='white'
        />
      </View>
    </SafeArea>
  );
}


