
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from '../TabNavigation'
const stack = createNativeStackNavigator()


const VerifiedAuthNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ 'headerShown': false }}>
                <stack.Screen name='Tabs' component={TabNavigation} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default VerifiedAuthNavigation