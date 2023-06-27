import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from '../TabNavigation'
import SplashScreen from '../../Screens/SplashScreen/SplashScreen'
import { useState } from 'react'
const stack = createNativeStackNavigator()


const VerifiedAuthNavigation = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false);
    }, 4500);
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ 'headerShown': false }}>
                {loading ?
                    <stack.Screen name='splash' component={SplashScreen} />
                    :
                    null
                }
                <stack.Screen name='Tabs' component={TabNavigation} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default VerifiedAuthNavigation