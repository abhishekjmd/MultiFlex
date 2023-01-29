import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SignUpScreen from '../../Screens/AuthenticationScreen/SignUpScreen'
import TabNavigation from '../TabNavigation'
import LoginScreen from '../../Screens/AuthenticationScreen/LoginScreen'
import OtpVerificationScreen from '../../Screens/AuthenticationScreen/OtpVerificationScreen'
const stack = createNativeStackNavigator()


const AuthNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ 'headerShown': false }}>
                <stack.Screen name='signUp' component={SignUpScreen} />
                <stack.Screen name='Login' component={LoginScreen} />
                <stack.Screen name='Verify' component={OtpVerificationScreen} />
                <stack.Screen name='Tabs' component={TabNavigation} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation