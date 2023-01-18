import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieListcomponent from '../../Components/HomeScreenComponents/MovieListcomponent/Index'

const MovieListScreen = () => {
    return (
        <View style={styles.root}>
            <MovieListcomponent />
        </View>
    )
}

export default MovieListScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'black'
    },
})