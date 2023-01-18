import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import GreetingComp from './GreetingComp'
import TopPlaylist from './HomeScreenComponents/TopPlaylist'

const PlaylistComp = ({ playlistName, image, onPlaylistCompPressed }) => {
    return (
        <Pressable style={styles.PlaylistMainContainer} onPress={onPlaylistCompPressed} >
            <View style={styles.PlaylistImageContainer}>
                <Image source={{ uri: image }} style={styles.PlaylistImage} />
            </View>
            <View style={styles.PlaylistTextContainer}>
                <Text style={styles.PlaylistText}> {playlistName.length > 25 ? playlistName.slice(0, 25) + '...' : playlistName} </Text>
            </View>
        </Pressable>
    )
}

const HomeScreenComp = () => {
    const [response, setResponse] = useState('')
    const navigation = useNavigation();

    const apicall = async () => {
        try {
            const api = await fetch('http://192.168.0.106:3000/multiflex/api/movies');
            const result = await api.json();
            console.log(result);
            setResponse(result);
        } catch (error) {
            console.log(error);
        }
    }

    const PressedVideoIndex = (index) => {
        console.log("Index of pressed object : ", index)
    }

    useEffect(() => {
        apicall();
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <GreetingComp />
            <FlatList
                data={response}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <PlaylistComp playlistName={item.name} image={item.image}
                            onPlaylistCompPressed={() => {
                                PressedVideoIndex(index)
                                console.warn(index);
                                navigation.navigate('Music', { MusicName: item.name, VideoIndex: index })
                            }}
                        />
                    )
                }}
                numColumns={2}
            />

        </View>
    )
}

export default HomeScreenComp

const styles = StyleSheet.create({
    PlaylistMainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        margin: '1%',
        height: 200,
    },
    PlaylistImageContainer: {
        height: '75%',
        width: '80%',

        // backgroundColor:'green'
    },
    PlaylistImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
        // resizeMode:'cover'
        // resizeMode:'cover'
        // backgroundColor:'red'
    },
    PlaylistTextContainer: {
        justifyContent: 'center',
        height: '20%',
        width: '85%',
        alignItems: 'flex-start',
        // backgroundColor:'blue'
    },
    PlaylistText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 14,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

})