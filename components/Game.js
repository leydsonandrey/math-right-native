import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// components
import { Button } from './Button';
import { Input } from './Input';
import { Timer } from './Timer';
import { SafeArea } from './SafeArea';

// theme
import { Colors } from '../theme/Colors'
import { Alert } from '../theme/Alert'

export const Game = ({ route }) => {
  //    valor do estado / função de atualização / estado inicial
  const [input, setInput] = useState();
  const [math, setMath] = useState({ n1: 0, n2: 0 });
  const [change, setChange] = useState(1);
  const [pontos, setPontos] = useState(0);
  const [erros, setErros] = useState(0);
  const [color, setColor] = useState();
  const [stored, setStored] = useState({ n1: 0, n2: 0, n3: 0 });

  const { maximo, type } = route.params;

  const typeOfNumbers = () => {
    if (type === 'soma') {
      return math.n1 + math.n2
    } else if (type === 'subt') {
      return math.n1 - math.n2
    } else if (type === 'mult') {
      return math.n1 * math.n2
    } else if (type === 'divi') {
      const divisao = math.n1 / math.n2
      if (Number.isInteger(divisao)) {
        return divisao
      } else {
        return divisao.toFixed(2)
      }
    } else if (type === 'raiz2') {
      const raizQuadrada = Math.sqrt(math.n1)
      if (Number.isInteger(raizQuadrada)) {
        return raizQuadrada
      } else {
        return raizQuadrada.toFixed(2)
      }
    } else if (type === 'pont2') {
      return math.n1 * math.n1
    } else if (type === 'pont3') {
      return math.n2 * math.n2 * math.n2
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
    setStored({ n1: math.n1, n2: math.n2, n3: typeOfNumbers() })
    setColor()
  };

  const typeCalc = () => {
    if (type === 'soma') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n1} + {math.n2}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1} + {stored.n2} = {stored.n3}</Text>,
        sizeInput: typeOfNumbers().toString().length
      }
      return typeOfCalc
    } else if (type === 'subt') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n1} - {math.n2}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1} - {stored.n2} = {stored.n3}</Text>,
        sizeInput: typeOfNumbers().toString().length
      }
      return typeOfCalc
    } else if (type === 'mult') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n1} × {math.n2}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1} × {stored.n2} = {stored.n3}</Text>,
        sizeInput: typeOfNumbers().toString().length
      }
      return typeOfCalc
    } else if (type === 'divi') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n1} ÷ {math.n2}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1} ÷ {stored.n2} = {stored.n3}</Text>,
        sizeInput: typeOfNumbers().toString().length,
        text: <Alert>Máximo de 2 Casas Decimais depois do ponto (.) - padrão americano. Ex.: 3÷2 = 1.5, 8÷3 = 2.67</Alert>
      }
      return typeOfCalc
    } else if (type === 'raiz2') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>√{math.n1}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}√{stored.n1} = {stored.n3}</Text>,
        sizeInput: typeOfNumbers().toString().length,
        text: <Alert>Máximo de 2 Casas Decimais depois do ponto (.) - padrão americano. Ex.: √5 = 2.24, √10 = 3.16</Alert>
      }
      return typeOfCalc
    } else if (type === 'pont2') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n1}²</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1}² = {stored.n3}</Text>,
        sizeInput: typeOfNumbers().toString().length,
      }
      return typeOfCalc
    } else if (type === 'pont3') {
      const typeOfCalc = {
        viewCalc: <Text style={styles.calc}>{math.n2}³</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n2}³ = {stored.n3}</Text>,
        sizeInput: typeOfNumbers().toString().length
      }
      return typeOfCalc
    }
  }

  return (
    <SafeArea isScrollView={Platform.OS === 'native' ? false : true}>
      <View>
        {typeCalc().viewCalc}
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, styles.statusTrue]}>Acertos{'\n'}{pontos}</Text>
          <Text style={[styles.statusText, styles.statusFalse]}>Errados{'\n'}{erros}</Text>
          {typeCalc().anterior}
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
    </SafeArea >
  );
}

const styles = StyleSheet.create({
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
    textAlign: 'center',
    borderRadius: 5,
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
