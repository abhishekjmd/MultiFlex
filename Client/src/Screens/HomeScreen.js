import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreenComponent from '../Components/HomeScreenComponents/HomeScreenComponent'

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <HomeScreenComponent />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})