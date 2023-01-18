import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { PlaylistAsync } from '../../redux/reducers/playlistReducers'
import PlaylistComp from './PlaylistComp'


const RecommendedPlaylist = () => {
  const [response, setResponse] = useState('')
  const dispatch = useDispatch();

  const playlistData = useSelector((state) => state.HomeReducer.PlaylistData)
  const dispatchFunction = async () => {
    try {
      await dispatch(PlaylistAsync())
      setResponse(playlistData.slice(4, 8))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    dispatchFunction()
  }, [])
  return (
    <View style={styles.main}>
      <View style={styles.root}>
        <Text style={styles.text}> Recommeneded for Today </Text>
        <FlatList
          horizontal
          data={response}
          renderItem={({ item }) => {
            return (
              <PlaylistComp
                Images={item.coverImage}
                TopplaylistName={item.name} />
            )
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default RecommendedPlaylist

const styles = StyleSheet.create({
  main:{
    alignItems:'center'
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36454F',
    borderRadius: 15,
    padding: 10,
    height: 280,
    width: '96%',
    marginBottom: 10

  },
  textContainer: {
    alignItems: 'center'
  },
  text: {
    fontWeight: '500',
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize'
  },
})