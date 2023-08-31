import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';

// components
import { Button } from './components/Button'
// theme
import { Colors } from './theme/Colors'

// pages
import { Play } from './app/Play'
import { StatusBar } from 'expo-status-bar';

const Menu = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(10);
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black', paddingHorizontal: 20, paddingTop: StatusBar.currentHeight }}>
      <Text style={{ color: 'white', textAlign: 'center', fontSize: 50, marginBottom: 50 }}>Math Right</Text>
      <Button
        title="Jogar"
        onPress={() => navigation.push('Calculo', { maximo: selectedValue })}
        buttonColor='blue'
        textColor='white'
      />
      <Picker
        style={{ backgroundColor: 'white', color: 'black', marginVertical: 10 }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        prompt={'Valor máximo:'}
      >
        <Picker.Item label="10" value={10} />
        <Picker.Item label="100" value={100} />
        <Picker.Item label="1000" value={1000} />
        <Picker.Item label="10000" value={10000} />
        <Picker.Item label="100000" value={100000} />
      </Picker>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Home" component={Menu} options={{
          title: ''
        }} />
        <Stack.Screen name="Calculo" component={Play} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
