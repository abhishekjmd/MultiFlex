import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Video from 'react-native-video'
import { useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import MovieListComp from '../HomeScreenComponents/MovieListcomponent/MovieListComp'
import Slider from '@react-native-community/slider'

const VideoPlayerComp = () => {
  const route = useRoute();
  const MusicListData = useSelector((state) => state.HomeReducer.PlaylistData);
  const playlistIndex = route.params.playlistIndex;
  const pressedVideoIndex = route.params.VideoIndex
  const [paused, setPaused] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(pressedVideoIndex)
  const [currentVideo, setCurrentVideo] = useState('')
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef(null);
  const togglePlay = () => {
    setPaused(!paused)
  }
  const currentVdeoFunction = async () => {
    const currentVideo = await MusicListData[playlistIndex].movies[currentVideoIndex]
    setCurrentVideo(currentVideo)
    console.log("currentVideo", currentVideo)
  }

  const handleForwardFunction = async () => {
    try {
      setCurrentVideoIndex((currentVideoIndex + 1) % MusicListData[playlistIndex].movies.length);
      const forwardVideo = await MusicListData[playlistIndex].movies[currentVideoIndex]
      setCurrentVideo(forwardVideo);
    } catch (error) {
      console.log(error)
    }
  }

  const handleBackwardFunction = async () => {
    try {
      setCurrentVideoIndex((currentVideoIndex - 1) % MusicListData[playlistIndex].movies.length);
      const backwardVideo = await MusicListData[playlistIndex].movies[currentVideoIndex]
      setCurrentVideo(backwardVideo);
    } catch (error) {
      console.log(error)
    }
  }

  const onSliderValueChange = (value) => {
    setCurrentTime(value);
  }
  useEffect(() => {
    console.log('pressedVideoIndex', pressedVideoIndex)
    currentVdeoFunction()
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
        <MovieListComp
          SongName={currentVideo.name}
          Artists={currentVideo.singer}
          Images={currentVideo.image}
          type='Primary'
        />
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
        <Text style={{ marginLeft: 5 }}> {Math.floor(currentTime / 60).toString()}:{(currentTime % 60).toString().slice(0, 2)} / {Math.floor(duration / 60)}:{(duration % 60).toString().slice(0, 2)} </Text>
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

export default VideoPlayerComp

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
    height: '80%',
  },
  videoPlayer: {
    width: '100%',
    height: '90%',
    borderRadius: 15,
    borderColor: '#36454F',
    borderWidth: 1
  },
  controlContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // backgroundColor:'blue'
    // borderWidth: 1,
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