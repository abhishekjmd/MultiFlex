import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
const Tab = createBottomTabNavigator()

import HomeStackNavigation from './index'
import LibraryScreen from '../Screens/LibraryScreen'
import SearchScreen from '../Screens/SearchScreen'
import ProfileScreen from '../Screens/ProfileScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 55,
                        borderRadius:10,
                        borderTopWidth: 0,
                        position: 'absolute',
                        // left: 0,
                        // right: 0,
                        // bottom: 0,
                        padding: 5

                    },
                    tabBarLabelStyle: {
                        color: 'white',
                        fontSize: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
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

                        // 'headerTitle':(()=>(
                        // <Image source={require('../Assets/Capture-removebg-preview.png')} />

                        // ))
                    }} />
                <Tab.Screen name='Library' component={LibraryScreen}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <Ionicons name='md-library' size={32} color='#ffffff' />

                        )),
                    }}

                />
                <Tab.Screen name='Search' component={SearchScreen}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <Ionicons name='search' size={32} color='#ffffff' />

                        )),
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