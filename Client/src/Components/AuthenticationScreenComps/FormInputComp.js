import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const FormInputComp = ({ placeholder, InputText }) => {
  return (
    <View style={styles.root}>
      <View style={styles.mainContainer}>
        <View style={styles.inputTextContainer}>
          <Text style={styles.inputText}>{InputText}</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput placeholder={placeholder} placeholderTextColor='black'  style={{color:'black'}} />
        </View>
      </View>
    </View>
  )
}

export default FormInputComp

const styles = StyleSheet.create({
  root: {
    height: 80,
    width: '95%',
    marginTop: '2%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent:'center',
  },
  mainContainer:{
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 15,
    height: '90%',
    width: '95%',
    flexDirection: 'row',
    backgroundColor:'white',
    borderWidth:1
  },
  inputTextContainer: {
    // backgroundColor: 'green',
    width: '40%',
    height: '80%',
    justifyContent:'center',
    alignItems:'flex-start'

  },
  inputText:{
    color:'black',
    // fontSize:16
  },
  textInputContainer:{
    borderBottomWidth:1,
    width: '50%',
    height: '80%',
    justifyContent: 'center',
    alignItems:'center'
  },
})