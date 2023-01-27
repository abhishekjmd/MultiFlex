import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LibraryListComp from '../../Components/LibraryScreenComponents/LibraryListComp'

const LibraryListScreen = () => {
    return (
        <View style={styles.root}>
            <LibraryListComp />
        </View>
    )
}

export default LibraryListScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'black'
        
    },
})