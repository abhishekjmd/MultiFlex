import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileComp from '../../Components/ProfileScreenComponents/ProfileComp'

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ProfileComp />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})