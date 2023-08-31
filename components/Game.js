import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from './Button';
import { Input } from './Input';
import { Timer } from './Timer';
import { SafeArea } from './SafeArea';

export const Game = ({ maximo }) => {
// theme
import { Colors } from '../theme/Colors'
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
  };

  useEffect(() => {
    setMath({
      n1: handleRandomNumber(),
      n2: handleRandomNumber(),
    });
  }, [change]) // ao `change` mudar, setMath será executado

  var setMaximo = maximo

  const handleRandomNumber = () => {
    return Math.floor(Math.random() * (setMaximo - 1 + 1)) + 1;
  };

  const changeValue = () => {
    setChange(change + 1)
    if (pontos < 1) { setPontos(0) }
    setInput('')
    setStored(math.n1 + math.n2)
    setColor()
  };

  return (
    <SafeArea background={Colors.black}>
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
          placeholder='Calculo'
          onSubmitEditing={checkNumber}
          onChangeText={setInput}
          maxLength={maximo.toString().length}
          color={color}
        />
        <Button
          onPress={checkNumber}
          title='Verificar'
        <Button
          onPress={changeValue}
          title='Gerar Soma'
          buttonColor={Colors.blue}
          textColor='white'
        />
        <StatusBar style="light" />
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    gap: 10,
    paddingTop: 10
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
    backgroundColor: Colors.green,
  },
  statusFalse: {
    backgroundColor: Colors.red,
  },
  statusPrevious: {
    backgroundColor: Colors.jet,
  },
  statusTimer: {
    backgroundColor: Colors.blue,
  },
  calc: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
  },
})

export default Game;
