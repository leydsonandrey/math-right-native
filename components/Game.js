import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// components
import { Button } from './Button';
import { Input } from './Input';
import { Timer } from './Timer';
import { SafeArea } from './SafeArea';

// theme
import { Colors } from '../theme/Colors'

export const Game = ({ route }) => {
  //    valor do estado / função de atualização / estado inicial
  const [input, setInput] = useState();
  const [math, setMath] = useState({ n1: 0, n2: 0 });
  const [change, setChange] = useState(1);
  const [pontos, setPontos] = useState(0);
  const [erros, setErros] = useState(0);
  const [color, setColor] = useState();
  const [stored, setStored] = useState(0);

  const { maximo, type } = route.params;

  const typeOfNumbers = () => {
    if (type === 'soma') {
      return math.n1 + math.n2
    } else if (type === 'mult') {
      return math.n1 * math.n2
    } else if (type === 'divi') {
      const divisao = math.n1 / math.n2
      if ((math.n1 % math.n2) === 0) {
        console.log('%', divisao)
        return divisao
      } else {
        const valuediv = divisao.toString().slice(0, maximo.toString().length + 2)
        console.log('/', valuediv)
        return parseFloat(valuediv)
      }
    } else if (type === 'subt') {
      return math.n1 - math.n2
    }
  }
  console.log(8 / 3)

  const checkNumber = () => {
    if (input != typeOfNumbers()) { // errado
      changeValue()
      setErros(erros + 1)
      setColor(false)
    } else if (input == typeOfNumbers()) { // certo
      changeValue()
      setPontos(pontos + 1)
      setColor(true)
    } else {
      alert('erro')
    };
  };

  useEffect(() => {
    setMath({
      n1: handleRandomNumber(),
      n2: handleRandomNumber(),
    });
  }, [change]) // ao `change` mudar, setMath será executado

  const handleRandomNumber = () => {
    return Math.floor(Math.random() * (maximo - 1 + 1)) + 1;
  };

  const changeValue = () => {
    setChange(change + 1)
    if (pontos < 1) { setPontos(0) }
    setInput('')
    setStored(typeOfNumbers)
    setColor()
  };

  const typeCalc = () => {
    if (type === 'soma') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n1} + {math.n2}</Text>,
        sizeInput: maximo.toString().length
      }
      return typeOfCalc
    } else if (type === 'mult') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n1} × {math.n2}</Text>,
        sizeInput: (maximo * maximo).toString().length
      }
      return typeOfCalc
    } else if (type === 'divi') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n1} ÷ {math.n2}</Text>,
        sizeInput: (maximo * 100).toString().length,
        text: <Text style={styles.statusText}>Máximo de 2 Casas Decimais depois do ponto (.) - padrão americano. Ex.: 3÷2 = 1.5, 8÷3 = 2.66</Text>
      }
      return typeOfCalc
    } else if (type === 'subt') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n1} - {math.n2}</Text>,
        sizeInput: (maximo * 10).toString().length
      }
      return typeOfCalc
    }
  }

  return (
    <SafeArea background={Colors.black} isScrollView={false}>
      <View>
        {typeCalc().viewCalc}
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, styles.statusTrue]}>Acertos{'\n'}{pontos}</Text>
          <Text style={[styles.statusText, styles.statusFalse]}>Errados{'\n'}{erros}</Text>
          <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored}</Text>
          <Timer style={[styles.statusText, styles.statusTimer]} />
        </View>
      </View>
      <Input
        value={input}
        onSubmitEditing={checkNumber}
        onChangeText={setInput}
        maxLength={typeCalc().sizeInput}
        color={color}
      />
      <Button
        onPress={checkNumber}
        title='Verificar'
        buttonColor={Colors.blue}
        textColor='white'
      />
      <StatusBar style="light" />
      {typeCalc().text}
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
    fontSize: 12,
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white'
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

export default Game
