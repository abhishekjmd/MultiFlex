import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
const Tab = createBottomTabNavigator()

import HomeStackNavigation from './index'
import LibraryScreen from '../Screens/LibraryScreen'
import ProfileScreen from '../Screens/ProfileScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SearchStackNavigation from './searchStackScreen'


const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#343434',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 60,
                        borderRadius: 10,
                        borderTopWidth: 0,
                        position: 'absolute',
                        padding: 5,
                    },
                    tabBarLabelStyle: {
                        color: 'white',
                        fontSize: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 3
                    },
                }}
            >
                <Tab.Screen name='Home' component={HomeStackNavigation}
                    options=
                    {{
                        headerShown: false,
                        tabBarIcon: (() => (
                            <Entypo name='home' size={32} color='#ffffff' />

                        )),
                        headerRight: (() => {
                            <View>
                                <Image source={require('../Assets/Capture-removebg-preview.png')} />
                            </View>
                        }),
                    }} />
                <Tab.Screen name='Library' component={LibraryScreen}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <Ionicons name='md-library' size={32} color='#ffffff' />
                        )),
                    }}
                />
                <Tab.Screen name='SearchStack' component={SearchStackNavigation}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <Ionicons name='search' size={32} color='#ffffff' />
                        )),
                        headerShown: false
                    }}

                />
                <Tab.Screen name='Profile' component={ProfileScreen}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <FontAwesome name='user' size={32} color='#ffffff' />

                        )),
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})