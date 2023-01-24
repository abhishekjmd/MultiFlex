import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchBarComp = ({ value, onChangeText, placeholder }) => {
  return (
      <View style={styles.MainContainer}>
          <View style={styles.SearchContainer}>
              <TextInput placeholder={placeholder} style={styles.textInput} value={value} onChangeText={onChangeText} placeholderTextColor='#d5ded7' />
              <Ionicons name='search' size={30} style={styles.Icon} />
          </View>
      </View>
  )
}

export default SearchBarComp

const styles = StyleSheet.create({
    MainContainer: {
        alignItems: 'center',
        width: '100%',
        height: 60,
        marginTop: 10
    },
    SearchContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: '95%',
        height: '100%',
        borderRadius: 10,
        borderColor: '#36454F',
        borderWidth: 1
    },
    textInput: {
        fontSize: 20,
        color: 'white'
    },
    Icon: {
        color: 'white',
        backgroundColor: '#36454F',
        padding: 8,
        borderRadius: 10
    },
})