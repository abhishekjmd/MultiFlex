import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import MusicScreen from '../Screens/MusicScreen'
import Fontisto from 'react-native-vector-icons/Fontisto'
const stack = createNativeStackNavigator()
const Navigation = () => {
    return (

        <stack.Navigator>
            <stack.Screen name='home' component={HomeScreen}
                options={{
                    headerLeft: (() => (
                        <View style={{

                            width: 190, height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',

                        }}>
                            <Fontisto name='smiley' size={30} />
                            <Image source={require('../Assets/Capture-removebg-preview.png')} style={{ width: 130, height: 33 }} />
                        </View>
                    )),
                    title: null,
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    headerRight: (() => (
                        <View style={{ height: 45, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../Assets/abhishek.jpeg')} style={{ width: 40, height: 40, borderRadius: 15 }} />
                        </View>

                    ))
                }}
            />
            <stack.Screen name='Music' component={MusicScreen} />
        </stack.Navigator>

    )
}

export default Navigation