import { View } from 'react-native'
import React from 'react'
import SignUpScreenComp from '../../Components/AuthenticationScreenComps/SignUpScreenComp'

const SignUpScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <SignUpScreenComp />
    </View>
  )
}

export default SignUpScreen
