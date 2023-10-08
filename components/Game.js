import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

// components
import Timer from './Timer'

// ui
import { Colors } from '../ui/Colors'
import Alert from '../ui/Alert'
import SafeArea from '../ui/SafeArea'
import Button from '../ui/Button'
import Input from '../ui/Input'

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

  useEffect(() => {
    setMath({
      n1: handleRandomNumber(),
      n2: handleRandomNumber(),
    })
  }, [change]) // ao `change` mudar, setMath será executado

  function handleRandomNumber() {
    if (type === 'raiz2') {
      return Math.floor(Math.random() * (maximo - 1 + 1)) + 1;
    } else {
      return Math.floor(Math.random() * (maximo - -maximo + 1)) + -maximo;
    }
  }

  const calcContainer = new Object()

  switch (type) {
    case 'soma':
      calcContainer.calculo = math.n1 + math.n2
      calcContainer.calculoString = `${math.n1} + ${math.n2}`
      calcContainer.anterior = `Anterior${'\n'}${stored.n1} + ${stored.n2} = ${stored.n3}`
      break
    case 'subt':
      calcContainer.calculo = math.n1 - math.n2
      calcContainer.calculoString = `${math.n1} - ${math.n2}`
      calcContainer.anterior = `Anterior${'\n'}${stored.n1} - ${stored.n2} = ${stored.n3}`
      break
    case 'mult':
      calcContainer.calculo = math.n1 * math.n2
      calcContainer.calculoString = `${math.n1} × ${math.n2}`
      calcContainer.anterior = `Anterior${'\n'}${stored.n1} × ${stored.n2} = ${stored.n3}`
      break
    case 'divi':
      calcContainer.calculo = Number.isInteger(math.n1 / math.n2) ? math.n1 / math.n2 : (math.n1 / math.n2).toFixed(2)
      calcContainer.calculoString = `${math.n1} ÷ ${math.n2}`
      calcContainer.anterior = `Anterior${'\n'}${stored.n1} ÷ ${stored.n2} = ${stored.n3}`
      calcContainer.texto = 'Máximo de 2 Casas Decimais depois do ponto (.) - padrão americano. Ex.: 3÷2 = 1.5, 8÷3 = 2.67'
      break
    case 'raiz2':
      calcContainer.calculo = Number.isInteger(Math.sqrt(math.n1)) ? Math.sqrt(math.n1) : Math.sqrt(math.n1).toFixed(2)
      calcContainer.calculoString = `√${math.n1}`
      calcContainer.anterior = `Anterior${'\n'}√${stored.n1} = ${stored.n3}`
      calcContainer.texto = 'Máximo de 2 Casas Decimais depois do ponto (.) - padrão americano. Ex.: √5 = 2.24, √10 = 3.16. Esse modo pode ter contas erradas!'
      break
    case 'pont2':
      calcContainer.calculo = math.n1 * math.n1
      calcContainer.calculoString = `${math.n1}²`
      calcContainer.anterior = `Anterior${'\n'}${stored.n1}² = ${stored.n3}`
      break
    case 'pont3':
      calcContainer.calculo = math.n2 * math.n2 * math.n2
      calcContainer.calculoString = `${math.n2}³`
      calcContainer.anterior = `Anterior${'\n'}${stored.n2}³ = ${stored.n3}`
      break
  }

  function valueCheck() {
    const value = calcContainer.calculo
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

  function valueChange() {
    setChange(change + 0.1)
    setInput('')
    setStored({ n1: math.n1, n2: math.n2, n3: calcContainer.calculo })
    setColor()
  }

  let alert;
  if (calcContainer.texto != undefined) {
    alert = <Alert>{calcContainer.texto}</Alert>
  }

  return (
    <SafeArea>
      <View>
        <Text style={styles.calc}>{calcContainer.calculoString}</Text>
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, styles.statusTrue]}>Acertos{'\n'}{pontos}</Text>
          <Text style={[styles.statusText, styles.statusFalse]}>Errados{'\n'}{erros}</Text>
          <Text style={[styles.statusText, styles.statusPrevious]}>{calcContainer.anterior}</Text>
          <Timer style={[styles.statusText, styles.statusTimer]} />
        </View>
      </View>
      <Input
        value={input}
        onSubmitEditing={valueCheck}
        onChangeText={setInput}
        maxLength={calcContainer.calculo.toString().length}
        color={color}
      />
      <Button
        onPress={valueCheck}
        title='Verificar'
        buttonColor={Colors.blue}
      />
      {alert}
      <StatusBar style="light" />
    </SafeArea>
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
