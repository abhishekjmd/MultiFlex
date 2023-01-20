import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MovieListComp = ({ OnVideoPressed, SongName, Artists, Images, type }) => {
    return (
        <Pressable style={[styles.root, styles[`root_${type}`]]} onPress={OnVideoPressed}>
            <View style={[styles.MainContainer, styles[`MainContainer_${type}`]]}>
                <View style={[styles.ImageContainer, styles[`ImageContainer_${type}`]]}>
                    <Image source={{ uri: Images }} style={styles.Image} />
                </View>
                <View style={[styles.MainTextContainer, styles[`MainTextContainer_${type}`]]}>
                    <Text style={[styles.FirstText, styles[`FirstText_${type}`]]}> {SongName} </Text>
                    <View style={[styles.SecondContainer, styles[`SecondContainer_${type}`]]}>
                        <View style={[styles.LyricsTextContainer, styles[`LyricsTextContainer_${type}`]]}>
                            <Text style={[styles.LyricsText, styles[`LyricsText_${type}`]]}> Singer </Text>
                        </View>
                        <View>
                            <Text style={[styles.LastText, styles[`LastText${type}`]]}> {Artists} </Text>
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
    root_Primary: {
        height: 50,
        borderWidth: 0,
        // borderBottomColor: '#36454F',
        borderBottomWidth: 0,
        // borderColor: '#36454F',
        borderRadius: 15,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    MainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        height: '80%'
    },
    MainContainer_Primary:{
        width:'100%',
        height: '90%',
        margin: 0,
        justifyContent:'center',
        alignItems:'center',
        // marginBottom:10
    },
    ImageContainer: {
        width: 100,
        height: 100,
    },
    ImageContainer_Primary: {
        width: 60,
        height: 60
    },
    Image: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    MainTextContainer: {
        justifyContent: 'center',
        marginLeft: 8,
        width: '70%',
        height: 100
    },
    MainTextContainer_Primary:{
        width:'80%',
        height:'80%',
    },
    FirstText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 20,
        marginBottom: 5
    },
    FirstText_Primary:{
        fontSize: 16,
    },
    SecondContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        width: '80%',
    },
    SecondContainer_Primary:{
        width:'80%'
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