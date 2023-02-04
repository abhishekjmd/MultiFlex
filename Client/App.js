import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import TabNavigation from './src/Navigation/TabNavigation'
import AuthNavigation from './src/Navigation/AuthNavigation.js/AuthNavigation'
import MultiFlex from './MultiFlex'

const App = () => {  
  return (
    <View style={{ flex: 1 }}>
      <MultiFlex />
    </View>
  )
}

export default App
