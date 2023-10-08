import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

// ui
import { Colors } from './ui/Colors'

// pages
import Operacoes from './pages/Operacoes'
import Game from './components/Game'

const Drawer = createDrawerNavigator();

function DrawerMenu() {
  return (
    <Drawer.Navigator initialRouteName="Operacoes" screenOptions={{
      headerStyle: {
        backgroundColor: Colors.jet,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerShadowVisible: false,
      drawerStyle: {
        backgroundColor: Colors.jet,
      }
    }}
    >
      <Drawer.Screen
        name="Operações"
        component={Operacoes}
        options={{ drawerLabel: 'Operações' }}
      />
    </Drawer.Navigator>
  );
}


const Stack = createNativeStackNavigator()

function App() {
  const linking = {
    prefixes: ['math-right://', 'https://math-right.vercel.app'],
  };

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
        <Stack.Screen name="DrawerMenu" component={DrawerMenu} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="play" component={Game} options={{ title: 'Calcule' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App 
