import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreenComp from '../../Components/AuthenticationScreenComps/LoginScreencomponents/LoginScreenComp'
import { useState } from 'react'

const LoginScreen = () => {
    const [isloading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
    return (
        
        <View>
            <LoginScreenComp />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})