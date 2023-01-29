import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import FormInputComp from '../FormInputComp'
import { useNavigation } from '@react-navigation/native'


const SignUpScreenComp = () => {
    const navigation = useNavigation()
    const loginhandle = () => {
        navigation.navigate('Login')
    }
    return (   
            <View style={styles.mainContainer}>
                <View style={styles.LottieContainer}>
                    <LottieView source={require('../../../Assets/television.json')} autoPlay loop />
                </View>
                <View style={styles.FormContainer}>
                    <FormInputComp InputText='Name' placeholder='Name' />
                    <FormInputComp InputText='Email' placeholder='Email' />
                    <FormInputComp InputText='Mobile Number' placeholder='Mobile Number' />
                    <FormInputComp InputText='Password' placeholder='Password' />
                    <FormInputComp InputText='Confirm Password' placeholder='Confirm Password' />
                </View>
                <TouchableOpacity style={styles.signupContainer}>
                    <Text style={styles.signupText}> Register User </Text>
                </TouchableOpacity>
                <View style={styles.alreadyContainer}>
                    <Text style={{ color: 'black' }}>Already have an account?</Text>
                    <TouchableOpacity style={styles.loginContainer} onPress={loginhandle}>
                        <Text style={{ color: 'blue', }}> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        
    )
}

export default SignUpScreenComp

const styles = StyleSheet.create({
    
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
    },
    LottieContainer: {
        width: '100%',
        height: '20%',
    },
    FormContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#c0d6e4',
        width: '95%',
        borderRadius: 15,
        height: '58%',
        // borderWidth: 1,
    },
    signupContainer: {
        borderWidth: 1,
        width: '95%',
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
    alreadyContainer: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%'
    },
})