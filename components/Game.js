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

  function ListaCalculo() {
    const soma = { 
      calculo: math.n1 + math.n2,
      calculoString: `${math.n1} + ${math.n2}`,
      anterior: `Anterior${'\n'}${stored.n1} + ${stored.n2} = ${stored.n3}`
    }
    const subt = {
      calculo: math.n1 - math.n2,
      calculoString: `${math.n1} + ${math.n2}`,
      anterior: `Anterior${'\n'}${stored.n1} - ${stored.n2} = ${stored.n3}`
    }
    const mult = {
      calculo: math.n1 * math.n2,
      calculoString: `${math.n1} × ${math.n2}`,
      anterior: `Anterior${'\n'}${stored.n1} × ${stored.n2} = ${stored.n3}`
    }
    const divi = {
      calculo: math.n1 / math.n2,
      calculoString: `${math.n1} ÷ ${math.n2}`,
      anterior: `Anterior${'\n'}${stored.n1} ÷ ${stored.n2} = ${stored.n3}`,
      texto: 'Máximo de 2 Casas Decimais depois do ponto (.) - padrão americano. Ex.: 3÷2 = 1.5, 8÷3 = 2.67'
    }
    const raiz2 = {
      calculo: Number.isInteger(Math.sqrt(math.n1)) ? Math.sqrt(math.n1) : Math.sqrt(math.n1).toFixed(2),
      calculoString: `√${math.n1}`, anterior: `Anterior${'\n'}√${stored.n1} = ${stored.n3}`,
      texto: 'Máximo de 2 Casas Decimais depois do ponto (.) - padrão americano. Ex.: √5 = 2.24, √10 = 3.16. Esse modo pode ter contas erradas!'
    }
    const pont2 = {
      calculo: math.n1 * math.n1,
      calculoString: `${math.n1}²`,
      anterior: `Anterior${'\n'}${stored.n1}² = ${stored.n3}`
    }
    const pont3 = {
      calculo: math.n2 * math.n2 * math.n2,
      calculoString: `${math.n2}³`,
      anterior: `Anterior${'\n'}${stored.n2}³ = ${stored.n3}`
    }

    if (type === 'soma') {
      return soma
    } else if (type === 'subt') {
      return subt
    } else if (type === 'mult') {
      return mult
    } else if (type === 'divi') {
      return divi
    } else if (type === 'raiz2') {
      return raiz2
    } else if (type === 'pont2') {
      return pont2
    } else if (type === 'pont3') {
      return pont3
    }
  }

  function valueCheck() {
    const value = ListaCalculo.calculo
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
    if (type === 'raiz2') {
      return Math.floor(Math.random() * (maximo - 1 + 1)) + 1;
    } else {
      return Math.floor(Math.random() * (maximo - -maximo + 1)) + -maximo;
    }
  }

  function valueChange() {
    setChange(change + 0.1)
    setInput('')
    setStored({ n1: math.n1, n2: math.n2, n3: ListaCalculo().calculo })
    setColor()
  }

  let alert;
  if (ListaCalculo().texto != undefined) {
    alert = <Alert>{ListaCalculo().texto}</Alert>
  }

  return (
    <SafeArea>
      <View>
        <Text style={styles.calc}>{ListaCalculo().calculoString}</Text>
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, styles.statusTrue]}>Acertos{'\n'}{pontos}</Text>
          <Text style={[styles.statusText, styles.statusFalse]}>Errados{'\n'}{erros}</Text>
          <Text style={[styles.statusText, styles.statusPrevious]}>{ListaCalculo().anterior}</Text>
          <Timer style={[styles.statusText, styles.statusTimer]} />
        </View>
      </View>
      <Input
        value={input}
        onSubmitEditing={valueCheck}
        onChangeText={setInput}
        maxLength={ListaCalculo().calculo.toString().length}
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
