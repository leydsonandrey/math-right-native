import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

// components
import Button from './Button'
import Input from './Input'
import Timer from './Timer'
import SafeArea from './SafeArea'

// theme
import { Colors } from '../ui/Colors'
import { Alert } from '../ui/Alert'

export default function Game({ route }) {
  //    valor do estado / função de atualização / estado inicial
  const [input, setInput] = useState()
  const [math, setMath] = useState({ n1: 0, n2: 0 })
  const [change, setChange] = useState(0)
  const [pontos, setPontos] = useState(0)
  const [erros, setErros] = useState(0)
  const [color, setColor] = useState()
  const [stored, setStored] = useState({ n1: 0, n2: 0, n3: 0 })

  const { maximo, type } = route.params

  function typeCalc() {
    if (type === 'soma') {
      const typeOfCalc = {
        valueNumber: math.n1 + math.n2,
        viewCalc: <Text style={styles.calc}>{math.n1} + {math.n2}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1} + {stored.n2} = {stored.n3}</Text>,
      }
      return typeOfCalc
    } else if (type === 'subt') {
      const typeOfCalc = {
        valueNumber: math.n1 - math.n2,
        viewCalc: <Text style={styles.calc}>{math.n1} - {math.n2}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1} - {stored.n2} = {stored.n3}</Text>,
      }
      return typeOfCalc
    } else if (type === 'mult') {
      const typeOfCalc = {
        valueNumber: math.n1 * math.n2,
        viewCalc: <Text style={styles.calc}>{math.n1} × {math.n2}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1} × {stored.n2} = {stored.n3}</Text>,
      }
      return typeOfCalc
    } else if (type === 'divi') {
      const typeOfCalc = {
        valueNumber: math.n1 / math.n2,
        viewCalc: <Text style={styles.calc}>{math.n1} ÷ {math.n2}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1} ÷ {stored.n2} = {stored.n3}</Text>,
        text: <Alert>Máximo de 2 Casas Decimais depois do ponto (.) - padrão americano. Ex.: 3÷2 = 1.5, 8÷3 = 2.67</Alert>
      }
      return typeOfCalc
    } else if (type === 'raiz2') {
      const typeOfCalc = {
        valueNumber: Number.isInteger(Math.sqrt(math.n1)) ? Math.sqrt(math.n1) : Math.sqrt(math.n1).toFixed(2),
        viewCalc: <Text style={styles.calc}>√{math.n1}</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}√{stored.n1} = {stored.n3}</Text>,
        text: <Alert>Máximo de 2 Casas Decimais depois do ponto (.) - padrão americano. Ex.: √5 = 2.24, √10 = 3.16{'\n\n'}Esse modo pode ter contas erradas!</Alert>
      }
      return typeOfCalc
    } else if (type === 'pont2') {
      const typeOfCalc = {
        valueNumber: math.n1 * math.n1,
        viewCalc: <Text style={styles.calc}>{math.n1}²</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n1}² = {stored.n3}</Text>,
      }
      return typeOfCalc
    } else if (type === 'pont3') {
      const typeOfCalc = {
        valueNumber: math.n2 * math.n2 * math.n2,
        viewCalc: <Text style={styles.calc}>{math.n2}³</Text>,
        anterior: <Text style={[styles.statusText, styles.statusPrevious]}>Anterior{'\n'}{stored.n2}³ = {stored.n3}</Text>,
      }
      return typeOfCalc
    }
  }

  function valueCheck() {
    const value = typeCalc().valueNumber
    try {
      if (input != value) { // errado
        valueChange()
        setErros(erros + 1)
        setColor(false)
      } else if (input == value) { // certo
        valueChange()
        setPontos(pontos + 1)
        setColor(true)
      }
    }
    catch (e) {
      alert(e)
    }
  }

  useEffect(() => {
    setMath({
      n1: handleRandomNumber(),
      n2: handleRandomNumber(),
    })
  }, [change]) // ao `change` mudar, setMath será executado

  function handleRandomNumber() {
    return Math.floor(Math.random() * (maximo - 1 + 1)) + 1;
  }

  function valueChange() {
    setChange(change + 0.1)
    setInput('')
    setStored({ n1: math.n1, n2: math.n2, n3: typeCalc().valueNumber })
    setColor()
  }

  return (
    <SafeArea>
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
        onSubmitEditing={valueCheck}
        onChangeText={setInput}
        maxLength={typeCalc().valueNumber.toString().length}
        color={color}
      />
      <Button
        onPress={valueCheck}
        title='Verificar'
        buttonColor={Colors.blue}
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
