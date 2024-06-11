import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { Provider } from 'react-redux'
import Store from './components/Redux/Store'

const App = () => {
  return (
    
    <SafeAreaView>
     <Provider store={Store}>
      <Home/>
      </Provider>
 
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})