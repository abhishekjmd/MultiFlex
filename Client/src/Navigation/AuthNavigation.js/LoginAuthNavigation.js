import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from '../TabNavigation'
import LoginScreen from '../../Screens/AuthenticationScreen/LoginScreen'
import OtpVerificationScreen from '../../Screens/AuthenticationScreen/OtpVerificationScreen'
import SplashScreen from '../../Screens/SplashScreen/SplashScreen'
import { useState } from 'react'
const stack = createNativeStackNavigator()


const LoginAuthNavigation = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false);
    }, 8000);
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ 'headerShown': false }}>
                {loading
                    ?
                    <stack.Screen name='splash' component={SplashScreen} />
                    :
                    null
                }
                <stack.Screen name='Login' component={LoginScreen} />
                <stack.Screen name='Verify' component={OtpVerificationScreen} />
                <stack.Screen name='Tabs' component={TabNavigation} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginAuthNavigation