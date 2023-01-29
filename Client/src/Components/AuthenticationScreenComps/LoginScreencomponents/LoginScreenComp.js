import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import FormInputComp from '../FormInputComp'
import { useNavigation } from '@react-navigation/native'

const LoginScreenComp = () => {
    const navigation = useNavigation()
    const verificationhandle = () => {
        navigation.navigate('Verify')
    }
    return (
        <View style={styles.root}>
            <View style={styles.LottieContainer}>
                <LottieView source={require('../../../Assets/login.json')} autoPlay loop />
            </View>
            <FormInputComp InputText='Mobile Number' placeholder='Mobile Number' />
            <TouchableOpacity style={styles.signupContainer} onPress={verificationhandle}>
                <Text style={styles.signupText}> Send Verification Code </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreenComp

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    LottieContainer: {
        width: '100%',
        height: 300
    },
    signupContainer: {
        borderWidth: 1,
        width: '90%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: '5%',
    },
    signupText: {
        color: 'black',
        fontSize: 18
    },
})