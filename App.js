import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/views/Home'
import Jogos from './src/views/Jogoscamps'
import Fases from './src/views/Fasescamp'
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {

  const Stack = createStackNavigator()
  //setando todas as views
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Copa Brasil',
            headerTitleAlign: "center",
            color:'aqua'
          }}
        />
        <Stack.Screen
          name="Fases"
          component={Fases}
          options={{
            title: 'Fases',
            headerTitleAlign: "center"

          }}
        />
        <Stack.Screen
          name="Jogos"
          component={Jogos}
          options={{
            title: 'Jogos',
            headerTitleAlign: "center"

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}