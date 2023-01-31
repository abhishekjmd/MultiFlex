import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from '../TabNavigation'
import LoginScreen from '../../Screens/AuthenticationScreen/LoginScreen'
import OtpVerificationScreen from '../../Screens/AuthenticationScreen/OtpVerificationScreen'
const stack = createNativeStackNavigator()


const LoginAuthNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ 'headerShown': false }}>
                <stack.Screen name='Login' component={LoginScreen} />
                <stack.Screen name='Verify' component={OtpVerificationScreen} />
                <stack.Screen name='Tabs' component={TabNavigation} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginAuthNavigation