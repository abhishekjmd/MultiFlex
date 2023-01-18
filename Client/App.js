import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import TabNavigation from './src/Navigation/TabNavigation'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TabNavigation />
    </View>
  )
}

export default App
