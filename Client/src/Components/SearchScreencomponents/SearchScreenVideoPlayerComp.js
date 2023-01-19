import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useRoute } from '@react-navigation/native'
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider';


const SearchScreenVideoPlayerComp = () => {
  const route = useRoute();
  const videoIndex = route.params.VideoIndex
  const VideoList = route.params.VideoList
  const [currentVideoIndex, setCurrentVideoIndex] = useState(videoIndex)
  const [currentVideo, setCurrentVideo] = useState('')
  const [paused, setPaused] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef();

  const currentVideoFunction = async () => {
    setCurrentVideo(VideoList[videoIndex])
    console.log('videoList', VideoList[videoIndex])
  }

  const togglePlay = () => {
    setPaused(!paused);
  }

  const handleForwardFunction = async () => {
    try {
      setCurrentVideoIndex((currentVideoIndex + 1) % VideoList.length);
      const forwardVideo = await VideoList[currentVideoIndex];
      setCurrentVideo(forwardVideo)
    } catch (error) {
      console.log(error)
    }
  }

  const handleBackwardFunction = async () => {
    try {
      setCurrentVideoIndex((currentVideoIndex - 1) % VideoList.length);
      const forwardVideo = await VideoList[currentVideoIndex];
      setCurrentVideo(forwardVideo)
    } catch (error) {
      console.log(error)
    }
  }
  const onSliderValueChange = (value) => {
    setCurrentTime(value);
  }

  useEffect(() => {
    currentVideoFunction()
  }, [])


  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: currentVideo.Preview_url }}
            style={styles.videoPlayer}
            repeat={true}
            ref={videoRef}
            paused={paused}
            resizeMode={'cover'}
            onProgress={(data) => {
              setCurrentTime(data.currentTime)
            }}
            onLoad={(data) => {
              setDuration(data.duration)
            }}
          />
        </View>
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
      </View>
      <View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleBackwardFunction}>
            <Ionicons name='play-skip-back' size={30} color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlay} style={styles.playpause}>
            {paused
              ?
              <Ionicons name='play' size={60} color='white' style={styles.playpauseIcon} />
              :
              <Ionicons name='pause' size={60} color='white' style={styles.playpauseIcon} />
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

export default SearchScreenVideoPlayerComp

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width: '95%',
    height: 350,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#36454F',
    borderRadius: 15,
  },
  videoContainer: {
    width: '100%',
    height: '85%',
  },
  videoPlayer: {
    width: '100%',
    height: '90%',
    borderRadius: 15,
    borderColor: '#36454F',
    borderWidth: 1
  },
  controlContainer: {
    alignItems: 'center',
    borderWidth: 1,
  },
  progressContainer: {
    flexDirection: 'row',
    width: 350,
    height: 40,
  },
  iconContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
  },
  playpause: {
    width: '20%',
    borderColor: '#36454F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
  },
  playpauseIcon: {
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',

  },
})