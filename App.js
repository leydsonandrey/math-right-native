import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// ui
import { Colors } from './ui/Colors'

// pages
import Menu from './pages/Menu'
import Modos from './pages/Modos'
import Operacoes from './pages/Operacoes'
import Game from './components/Game'

const Stack = createNativeStackNavigator()

const App = () => {
  const linking = {
    prefixes: ['math-right://', 'https://math-right.vercel.app'],
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Menu"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.jet,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="menu" component={Menu} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="modos" component={Modos} options={{ title: 'Modos' }} />
        <Stack.Screen name="operacoes" component={Operacoes} options={{ title: 'Operações' }} />
        <Stack.Screen name="play" component={Game} options={{ title: 'Calcule' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
