import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Video from 'react-native-video'
import { useNavigation } from '@react-navigation/native'

// import video from '../Client/ChaandBalliyan.mp4'
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

    const videoRef = useRef(null);
    const onBuffer = (e) => {
        console.log('buffering', e);

    }
    const onError = (e) => {
        console.log('error', e)
    }
    const apicall = async () => {
        try {
            const api = await fetch('http://192.168.0.106:4000/multiflex/api/movies');
            const result = await api.json();
            console.log(result);
            setResponse(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        apicall();
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            {/* <Video source={require('./ChaandBalliyan.mp4')}    // Can be a URL or a local file.
        // ref={videoRef}                     // Store reference
        // onBuffer={onBuffer}                // Callback when remote video is buffering
        // onError={onError}               // Callback when video cannot be loaded
        // style={styles.backgroundVideo}
        // minLoadRetryCount={5}
        // mixWithOthers={'inherit'}
        // repeat={true}
        // resizeMode={'contain'}
      // paused={true}
      // onAudioBecomingNoisy={()=>{
      // Payload:none
      // }}
      // />
      */}


            <FlatList
                data={response}
                renderItem={({ item }) => {
                    return (
                        <PlaylistComp playlistName={item.name} image={item.image}
                            onPlaylistCompPressed={() => {
                                console.warn(item.name);
                                navigation.navigate('Music', { MusicName: item.name })
                                // <Video poster={item.image} source={require('./ChaandBalliyan.mp4')} style={styles.backgroundVideo} />
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