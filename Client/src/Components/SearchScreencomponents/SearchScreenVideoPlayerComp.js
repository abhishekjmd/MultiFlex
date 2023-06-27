import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useRoute } from '@react-navigation/native'
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '@react-native-community/slider';
import MovieListComp from '../HomeScreenComponents/MovieListcomponent/MovieListComp';



const SearchScreenVideoPlayerComp = () => {
  const route = useRoute();
  const videoRef = useRef(null);
  const videoIndex = route.params.VideoIndex
  const VideoList = route.params.VideoList
  const [currentVideoIndex, setCurrentVideoIndex] = useState(videoIndex)
  const [currentVideo, setCurrentVideo] = useState('')
  const [paused, setPaused] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [loading, setLoading] = useState(false)


  const onVideoLoadStart = () => {
    setLoading(true);
  };

  const onVideoLoad = (data) => {
    setLoading(false);
    setDuration(data.duration);
  };

  const onSliderValueChange = (value) => {
    setCurrentTime(value);
  };

  const onSliderSlidingComplete = (value) => {
    videoRef.current.seek(value);
  };




  const onVideoProgress = (data) => {
  
    const { currentTime, playableDuration } = data;
    const diff = playableDuration - currentTime;
    if (diff < 0.5) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    setCurrentTime(currentTime);

  };

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
      await setCurrentVideoIndex((currentVideoIndex - 1) % VideoList.length);
      const forwardVideo = await VideoList[currentVideoIndex];
      await setCurrentVideo(forwardVideo)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    currentVideoFunction()
  }, [])

  return (
    <View style={styles.root}>
      {
        loading
          ?
          <View style={styles.ActivityIndicatorContainer}>
            <ActivityIndicator size='large' color="#00acee" />
          </View>
          :
          null
      }
      <View style={styles.main}>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: currentVideo.Preview_url }}
            style={styles.videoPlayer}
            ref={videoRef}
            paused={paused}
            resizeMode={'cover'}
            onLoadStart={onVideoLoadStart}
            onLoad={onVideoLoad}
            onProgress={onVideoProgress}
          />
        </View>
        <View style={styles.MovieListStyle}>    
        <MovieListComp
          SongName={currentVideo.name}
          Artists={currentVideo.singer}
          Images={currentVideo.image}
          type='Primary'
        />
        </View>
      </View>
      <View style={styles.controlContainer}>
        <Slider
          style={styles.progressContainer}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          // onValueChange={handleSeek}
          onValueChange={onSliderValueChange}
          onSlidingComplete={onSliderSlidingComplete}
          // onValueChange={onSliderValueChange}
          // onValueChange={handleSliderChange}
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
  ActivityIndicatorContainer:{
    position:'absolute',
    zIndex:1,
    top:'34%'
  },
  MovieListStyle: {
    width: '100%',
    alignItems: 'center'
  },
})