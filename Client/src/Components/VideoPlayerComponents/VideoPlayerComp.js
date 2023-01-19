import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Video from 'react-native-video'
import { useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'

const VideoPlayerComp = () => {
  const route = useRoute();
  const MusicListData = useSelector((state) => state.HomeReducer.PlaylistData);
  const playlistIndex = route.params.playlistIndex;
  const pressedVideoIndex = route.params.VideoIndex
  const [paused, setPaused] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(pressedVideoIndex)
  const [currentVideo, setCurrentVideo] = useState('')
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

  useEffect(() => {
    console.log('pressedVideoIndex', pressedVideoIndex)
    currentVdeoFunction()
  }, [])
  return (
    <View style={styles.root}>
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: currentVideo.Preview_url }}
          style={styles.videoPlayer}
          repeat={true}
          ref={videoRef}
          paused={paused}
        />
      </View>
      <View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleBackwardFunction}>
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

export default VideoPlayerComp

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  videoContainer: {
    width: '95%',
    height: 300,
    marginTop: 10
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    alignItems: 'center'
  },
})