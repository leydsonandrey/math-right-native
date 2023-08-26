import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Button } from './components/Button';
import { Input } from './components/Input';
import { Timer } from './components/Timer'

export const App = () => {
  //    valor do estado / função de atualização / estado inicial
  const [input, setInput] = useState('');
  const [math, setMath] = useState({ n1: 0, n2: 0 });
  const [change, setChange] = useState(1);
  const [pontos, setPontos] = useState(0);
  const [erros, setErros] = useState(0);
  const [color, setColor] = useState();
  const [stored, setStored] = useState(0);

  const checkNumber = () => {
    if (input != (math.n1 + math.n2)) { // errado
      changeValue()
      setErros(erros + 1)
      setColor(false)
    } else if (input == (math.n1 + math.n2)) { // certo
      changeValue()
      setPontos(pontos + 1)
      setColor(true)
    } else {
      alert('erro')
    }
  }

  useEffect(() => {
    setMath({
      n1: handleRandomNumber(1, 100),
      n2: handleRandomNumber(1, 100),
    });
  }, [change]) // ao `change` mudar, setMath será executado

  const handleRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const changeValue = () => {
    setChange(change + 1)
    if (pontos < 1) { setPontos(0) }
    setInput('')
    setStored(math.n1 + math.n2)
    setColor()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameContainer}>
        <View>
          <Text style={styles.calc}>{math.n1} + {math.n2}</Text>
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, styles.statusTrue]}>C {pontos}</Text>
            <Text style={[styles.statusText, styles.statusFalse]}>E {erros}</Text>
            <Text style={[styles.statusText, styles.statusPrevious]}>A {stored}</Text>
            <Timer style={[styles.statusText, styles.statusTimer]} />
          </View>
        </View>
        <Input
          value={input}
          placeholder='000'
          onSubmitEditing={checkNumber}
          onChangeText={setInput}
          maxLength={3}
          color={color}
        />
        <Button
          onPress={checkNumber}
          title='Verificar'
          buttonColor='blue'
          textColor='white'
        />
        <Button
          onPress={changeValue}
          title='Gerar Soma'
          buttonColor='dimgrey'
          textColor='white'
        />
        <StatusBar style="light" />
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'black',
    paddingHorizontal: 20
  },
  gameContainer: {
    gap: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 16,
    padding: 5,
    borderRadius: 5,
  },
  statusTrue: {
    backgroundColor: 'green',
    color: 'white'
  },
  statusFalse: {
    backgroundColor: 'firebrick',
    color: 'white'
  },
  statusPrevious: {
    backgroundColor: 'dimgrey',
    color: 'white'
  },
  statusTimer: {
    backgroundColor: 'blue',
    color: 'white'
  },
  calc: {
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
