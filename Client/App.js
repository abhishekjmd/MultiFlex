import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import TabNavigation from './src/Navigation/TabNavigation'
import AuthNavigation from './src/Navigation/AuthNavigation.js/AuthNavigation'
import MultiFlex from './MultiFlex'
import DeviceInfo from 'react-native-device-info'

const App = () => {
  // const deviceId = DeviceInfo.getUniqueId();

  useEffect(() => {
    // console.warn(deviceId)
  }, [])
  return (
    <View style={{ flex: 1 }}>
      {/* 
    <AuthNavigation />
   */}
      <MultiFlex />
    </View>
  )
}

export default App
