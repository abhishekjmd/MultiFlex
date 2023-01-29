import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import TabNavigation from './src/Navigation/TabNavigation'
import AuthNavigation from './src/Navigation/AuthNavigation.js/AuthNavigation'
const App = () => {
  return (
    <View style={{ flex: 1 }}>
    <AuthNavigation />  
    
    </View>
  )
}

export default App
