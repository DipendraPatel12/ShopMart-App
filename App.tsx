import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { configureReanimatedLogger } from 'react-native-reanimated';

// Disable strict mode to suppress the warning
configureReanimatedLogger({ strict: false });

import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigations/StackNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/store'
const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor='white'></StatusBar>
        <NavigationContainer>
          <StackNavigator></StackNavigator>
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})