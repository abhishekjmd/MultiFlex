import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import MusicScreen from '../Screens/MusicScreen'


const stack = createNativeStackNavigator()
const Navigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='Home' component={HomeScreen} />
                <stack.Screen name='Music' component={MusicScreen} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation