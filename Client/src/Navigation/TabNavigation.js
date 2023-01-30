import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
const Tab = createBottomTabNavigator()

import HomeStackNavigation from './HomeScreenNavigation/index'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SearchStackNavigation from './SearchScreenNavigation/searchStackScreen'
import LibraryScreensNavigation from './LibraryScreensNavigation/Index'
const TabNavigation = () => {
    return (
        
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 70,
                        borderRadius: 12,
                        position: 'absolute',
                        padding: 5,
                        width:'95%',
                        marginLeft:'2.5%',
                        borderColor:'white',
                        borderWidth:1,
                        borderTopWidth:1.5,
                    },
                    tabBarLabelStyle: {
                        color:'white',
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
                            <Entypo name='home' size={32} color='white' />

                        )),
                        headerRight: (() => {
                            <View>
                                <Image source={require('../Assets/Capture-removebg-preview.png')} />
                            </View>
                        }),
                    }} />

                <Tab.Screen name='Library' component={LibraryScreensNavigation}
                    options=
                    {{
                        headerShown: false,
                        'tabBarIcon': (() => (
                            <Ionicons name='md-library' size={32} color='white' />
                        )),
                    }}
                />

                <Tab.Screen name='Search' component={SearchStackNavigation}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <Ionicons name='search' size={32} color='white' />
                        )),
                        headerShown: false
                    }}

                />
                <Tab.Screen name='Profile' component={ProfileScreen}
                    options=
                    {{
                        headerShown: false,
                        'tabBarIcon': (() => (
                            <FontAwesome name='user' size={32} color='white' />

                        )),
                    }}

                />
            </Tab.Navigator>
        
    )
}

export default TabNavigation

const styles = StyleSheet.create({})