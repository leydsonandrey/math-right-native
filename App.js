import React from 'react'
import { View, Button } from 'react-native'
import { useWindowDimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler'

// ui
import { Colors } from './ui/Colors'

// pages
import Operacoes from './pages/Operacoes'
import Sobre from './pages/Sobre'
import Game from './components/Game'

const Drawer = createDrawerNavigator()

function DrawerMenu() {
  const dimensions = useWindowDimensions()
  const isLargeScreen = dimensions.width >= 768

  return (
    <Drawer.Navigator initialRouteName="Operacoes" defaultStatus="closed" screenOptions={{
      headerStyle: {
        backgroundColor: Colors.jet,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerShadowVisible: false,
      drawerStyle: {
        width: isLargeScreen ? '30%' : '70%',
        backgroundColor: Colors.jet,
        border: 'none',
        padding: 10,
      },
      drawerAllowFontScaling: true,
      drawerType: 'front',
      drawerActiveTintColor: Colors.white,
      drawerActiveBackgroundColor: Colors.blue,
      drawerInactiveTintColor: Colors.white,

      overlayColor: 'transparent',
      swipeEnabled: true
    }}
    >
      <Drawer.Screen
        name="operacoes"
        component={Operacoes}
        options={{ title: 'Operações básicas', drawerLabel: 'Operações básicas' }}
      />
      <Drawer.Screen
        name="sobre"
        component={Sobre}
        options={{ title: 'Sobre', drawerLabel: 'Sobre' }}
      />
    </Drawer.Navigator>
  )
}


const Stack = createNativeStackNavigator()

function App() {
  const linking = {
    prefixes: ['math-right://', 'https://math-right.vercel.app'],
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="DrawerMenu"
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
        <Stack.Screen name="Menu" component={DrawerMenu} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Play" component={Game} options={{ title: 'Calcule' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App 
