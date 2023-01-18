import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoPlayerComp from '../../Components/VideoPlayerComponents/VideoPlayerComp'

const VideoPlayerScreen = () => {
  return (
    <View style={styles.root}>
      <VideoPlayerComp />
    </View>
  )
}

export default VideoPlayerScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'black'
    },
})