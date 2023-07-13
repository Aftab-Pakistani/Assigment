import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomeStack from './src/navigation/Homestack';
const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
      <HomeStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App


