import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import HomeScreenComp from './HomeScreenComp'
import HomeScreen from '../Screens/HomeScreen'
const BottomTabsComp = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.BottomTabContainer}>
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                <Entypo name='home' size={32} color='#ffffff' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
                <Ionicons name='search' size={32} color='#ffffff' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Library') }}>
                <Ionicons name='md-library' size={32} color='#ffffff' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                <FontAwesome name='user' size={32} color='#ffffff' />
            </TouchableOpacity>
        </View>
    )
}

const BottomTabs = () => {
    return (
        <View style={{ flex: 1 }}>
            <HomeScreen />
            <BottomTabsComp />
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    BottomTabContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 10,
        flex: 0.05,
    },
})