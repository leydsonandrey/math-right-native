import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Button from './components/Button';
import Input from './components/Input';

export const App = () => {
  //    valor do estado / função de atualização / estado inicial
  const [input, setInput] = useState('');
  const [math, setMath] = useState({ n1: 0, n2: 0 });
  const [change, setChange] = useState(1);
  const [pontos, setPontos] = useState(0);
  const [color, setColor] = useState();
  const [stored, setStored] = useState(0);

  const checkNumber = () => {
    if (input != (math.n1 + math.n2)) { // errado
      changeValue()
      setPontos(pontos - 1)
      setColor('red')
      if (pontos < 1) { setPontos(0) }
    } else if (input == (math.n1 + math.n2)) { // certo
      changeValue()
      setPontos(pontos + 1)
      setColor('green')
    }
  }

  useEffect(() => {
    setMath({
      n1: handleRandomNumber(1, 100),
      n2: handleRandomNumber(1, 100),
    });
  }, [change]) // ao `change` mudar, setMath será executado

  function handleRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function changeValue() {
    setChange(change + 1)
    setPontos(pontos - 1)
    if (pontos < 1) { setPontos(0) }
    setInput('')
    setStored(math.n1 + math.n2)
    setColor()
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.calcule}>{math.n1} + {math.n2}</Text>
        <Text style={styles.pontos}>Pontos: {pontos} | Anterior: {stored}</Text>
      </View>
      <Input
        value={input}
        placeholder='000'
        onSubmitEditing={checkNumber}
        onChangeText={setInput}
        maxLength={3}
        color={color}
      />
      <View>
        <Button
          onPress={checkNumber}
          title='Verificar'
          buttonColor='cyan'
        />
        <Button
          onPress={changeValue}
          title='Gerar Soma'
          buttonColor='white'
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  pontos: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 25,
  },
  calcule: {
    marginTop: 15,
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
  },
});


export default App;
