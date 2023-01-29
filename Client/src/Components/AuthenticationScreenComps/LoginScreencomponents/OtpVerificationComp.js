import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import FormInputComp from '../FormInputComp'
import { useNavigation } from '@react-navigation/native'

const OtpVerificationComp = () => {
    const navigation = useNavigation();
    const loginhandle =()=>{
        navigation.navigate('Tabs')
    }
    return (
        <View style={styles.root}>
            <View style={styles.LottieContainer}>
                <LottieView source={require('../../../Assets/verification.json')} autoPlay loop />
            </View>
            <FormInputComp InputText='Verification code' placeholder='Enter  Verification code ' />
            <TouchableOpacity style={styles.verificationContainer} onPress={loginhandle} >
                <Text style={styles.verificationText}> Login </Text>
            </TouchableOpacity>
        </View>
    )
}

export default OtpVerificationComp

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
        height: 300,
        marginBottom:'10%'
    },
    verificationContainer: {
        borderWidth: 1,
        width: '90%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: '5%',
    },
    verificationText: {
        color: 'black',
        fontSize: 18
    },
})