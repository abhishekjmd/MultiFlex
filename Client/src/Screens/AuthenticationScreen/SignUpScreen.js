import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpScreenComp from '../../Components/AuthenticationScreenComps/SignUpScreenComps/SignUpScreenComp'

const SignUpScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <SignUpScreenComp />
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})