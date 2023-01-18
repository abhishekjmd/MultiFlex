import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MovieListComp = ({ OnVideoPressed, SongName, Artists, Images }) => {
    return (
        <Pressable style={styles.root} onPress={OnVideoPressed}>
            <View style={styles.MainContainer}>
                <View style={styles.ImageContainer}>
                    <Image source={{ uri: Images }} style={styles.Image} />
                </View>
                <View style={styles.MainTextContainer}>
                    <Text style={styles.FirstText}> {SongName} </Text>
                    <View style={styles.SecondContainer}>
                        <View style={styles.LyricsTextContainer}>
                            <Text style={styles.LyricsText}> Singer </Text>
                        </View>
                        <View>
                            <Text style={styles.LastText}> {Artists} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default MovieListComp

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: 140,
        // backgroundColor:'green',
        marginBottom: 10,
        borderBottomColor: '#36454F',
        borderBottomWidth: 1
        // borderEndWidth:2,
        // borderEndColor:'blue'
    },
    MainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center',
        margin: 10,
        // backgroundColor:'red',
        height: '80%'
    },
    ImageContainer: {
        width: 100,
        height: 100,


    },
    Image: {
        width: '100%',
        height: '100%',
        borderRadius: 15

    },
    MainTextContainer: {
        justifyContent: 'center',
        marginLeft: 8,
        // backgroundColor:'blue',
        width: '70%',
        height: 100
    },
    FirstText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 20,
        marginBottom: 5
    },
    SecondContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        width: '80%',
        // backgroundColor:'blue'
    },
    LyricsTextContainer: {
        backgroundColor: '#d3dbd5',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 3,
        width: '22%',
        marginRight: 5,
    },
    LyricsText: {
        fontWeight: '600',
        color: 'black',
        fontSize: 10
    },
    LastText: {
        color: '#d3dbd5',
    },
})