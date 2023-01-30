import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
const PlaylistComp = ({ PlaylistCompPressed, Images, TopplaylistName }) => {
    return (
        <Pressable style={styles.root} onPress={PlaylistCompPressed} >
            <View style={styles.imageContainer}>
                <Image source={{ uri: Images }} style={styles.image} />
            </View>
            <View style={styles.newReleaseContainer}>
                <Text style={styles.newReleaseText}> {TopplaylistName && TopplaylistName.length > 25 ? TopplaylistName.slice(0, 25) + '...' : TopplaylistName} </Text>
            </View>
        </Pressable>

    )
}


export default PlaylistComp

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 250,
        marginLeft: 5,
        // backgroundColor:'green'
    },
    imageContainer: {
        height: '75%',
        width: '90%',
        borderWidth:3,
        // borderColor:'white',
        borderRadius: 15,

    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    },
    newReleaseContainer: {
        justifyContent: 'center',
        height: '15%',
        width: '90%',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    newReleaseText: {
        fontWeight: '500',
        color: 'white',
        // fontSize: 18,
    },
    container: {
        padding: 20
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
})