import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useEffect, useState, useRef, useCallback, } from 'react'
import { useRoute } from '@react-navigation/native'
import Video from 'react-native-video'
import Slider from '@react-native-community/slider'
import Ionicons from 'react-native-vector-icons/Ionicons'


const MusicScreenComp = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [responses, setResponse] = useState('')
    const [currentVideo, setCurrentVideo] = useState('');
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(false);
    const [isloading, setIsloading] = useState(true);
    const route = useRoute();
    const videoRef = useRef(null);
    const onBuffer = (e) => {
        console.log('buffering', e);
    }
    const onError = (e) => {
        console.log('error', e)
    }
    const apiCall = async () => {
        try {
            const musicName = route.params.MusicName;
            const response = await fetch(`http://192.168.0.106:4000/multiflex/api/movies`);
            const result = await response.json();
            console.log('musicname', musicName)
            setResponse(result)
            setCurrentVideo(result[currentVideoIndex])
            setIsloading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const handleForwardFunction = async () => {
        try {
            setCurrentVideoIndex((currentVideoIndex + 1) % responses.length);
            setCurrentVideo(responses[currentVideoIndex]);

        } catch (error) {
            console.log(error);
        }

    }
    const handleBackFunction = async () => {
        try {
            // setCurrentVideoIndex(currentVideoIndex - 1)
            setCurrentVideoIndex((currentVideoIndex - 1) % responses.length);
            setCurrentVideo(responses[currentVideoIndex]);

        } catch (error) {
            console.log('handleBackFunctionError',error)
        }
        // setCurrentVideo(responses[currentVideoIndex]);
    }

    const togglePlay = () => {
        setPaused(!paused);
    }
    const onSliderValueChange = (value) => {
        setCurrentTime(value);
    }
    useEffect(() => {
        apiCall();
        // handleForwardFunction();
        // console.log('currentVideoIndex',currentVideoIndex)
    }, [])
    return (
        <View style={styles.root}>
            <View style={styles.videoContainer}>
                {isloading
                    ?
                    <Text style={{ color: 'white' }}> loading video </Text>
                    :
                    <Video
                        source={{ uri: currentVideo.Preview_url }}
                        ref={videoRef}                     // Store reference
                        onBuffer={onBuffer}                // Callback when remote video is buffering
                        onError={onError}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo}
                        mixWithOthers={'duck'}
                        // repeat={true}
                        resizeMode={'contain'}
                        paused={paused}
                        onProgress={(data) => {
                            setCurrentTime(data.currentTime);
                        }}
                        onLoad={(data) => {
                            setDuration(data.duration);
                        }}
                    />

                }
                {/* 
            <Video
                    source={{ uri: currentVideo.Preview_url }}
                    ref={videoRef}                     // Store reference
                    onBuffer={onBuffer}                // Callback when remote video is buffering
                    onError={onError}               // Callback when video cannot be loaded
                    style={styles.backgroundVideo}
                    mixWithOthers={'duck'}
                    // repeat={true}
                    resizeMode={'contain'}
                    paused={paused}
                    onProgress={(data) => {
                        setCurrentTime(data.currentTime);
                    }}
                    onLoad={(data) => {
                        setDuration(data.duration);
                    }}
                />
         */}

            </View>
            <View style={styles.controlContainer}>
                <Slider
                    style={styles.progressContainer}
                    minimumValue={0}
                    maximumValue={duration}
                    value={currentTime}
                    onValueChange={onSliderValueChange}
                    thumbTintColor="white"
                    minimumTrackTintColor='white'
                    maximumTrackTintColor='#fff'
                />
                <View style={styles.durationContainer}>
                    <Text style={{ color: 'white' }}> {Math.floor(currentTime / 60).toString()}:{(currentTime % 60).toString().slice(0, 2)} </Text>
                    <Text style={{ color: 'white' }}> {Math.floor(duration / 60)}:{(duration % 60).toString().slice(0, 2)} </Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={handleBackFunction}>
                        <Ionicons name='play-skip-back' size={30} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={togglePlay}>
                        {paused
                            ?
                            <Ionicons name='play' size={60} color='white' />
                            :
                            <Ionicons name='pause' size={60} color='white' />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleForwardFunction}>
                        <Ionicons name='play-skip-forward' size={30} color='white' />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default MusicScreenComp

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-around'
    },
    videoContainer: {
        width: '100%',
        height: '40%',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controlContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // flexDirection:'column'
    },
    progressContainer: {
        width: 350,
        height: 40,
        flexDirection: 'row',
        marginTop: 25,
    },
    durationContainer: {
        width: 350,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        alignItems: 'center'
    },
})