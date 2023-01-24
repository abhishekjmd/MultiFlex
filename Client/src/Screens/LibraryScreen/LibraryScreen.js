import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LibraryScreenComp from '../../Components/LibraryScreenComponents/LibraryScreenComp'

const LibraryScreen = () => {
  return (
    <View style={styles.root}>
      <LibraryScreenComp />
    </View>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'black'
  }
})