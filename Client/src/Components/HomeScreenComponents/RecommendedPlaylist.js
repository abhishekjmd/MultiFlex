import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import PlaylistComp from './PlaylistComp'
import { useNavigation } from '@react-navigation/native'
import { PlaylistAsync } from '../../redux/reducers/playlistReducers'


const RecommendedPlaylist = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const playlistDataFunction =useCallback(()=>{
    dispatch(PlaylistAsync())
  },[dispatch]) 
      
  useEffect(() => {
    playlistDataFunction();
  }, [playlistDataFunction])
  const playlistData = useSelector((state) => state.HomeReducer.PlaylistData.slice(4, 8))
  return (
    <View style={styles.main}>
      <View style={styles.root}>
        <Text style={styles.text}> Recommeneded for Today </Text>
        <FlatList
          horizontal
          data={playlistData}
          // keyExtractor={(item, index) => (index + 4).toString()}
          renderItem={({ item, index }) => {
            return (
              <PlaylistComp
                Images={item.coverImage}
                TopplaylistName={item.name}
                PlaylistCompPressed={() => { navigation.navigate('MovieList', { movieList: item.movies, playlistIndex: index + 4 }) }}
              />

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
  main: {
    alignItems: 'center'
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#36454F',
    borderRadius: 15,
    padding: 10,
    height: 280,
    width: '96%',
    marginBottom: 10,
       borderWidth:2,
        borderColor:'#36454F'

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