import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { AddMovieToPlaylistComp, TopLibraryListComp } from './SubLibraryComps'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { GetLibraryAsync } from '../../redux/reducers/LibraryScreenReducers'
import MovieListComp from '../HomeScreenComponents/MovieListcomponent/MovieListComp'

const LibraryListComp = () => {
  const route = useRoute();
  const PlaylistId = route.params.PlaylistId
  const MovieData = route.params.MovieData
  const [modalopen, setModalOpen] = useState(false)
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const modalHandle = () => {
    setModalOpen(!modalopen);
  }

  const onRefresh = async () => {
    setRefreshing(true);
    MovieData;
    setModalOpen(!modalopen);
    setRefreshing(false);

  };

  return (
    <View>
      <TopLibraryListComp onPress={modalHandle} />
      {modalopen ? <AddMovieToPlaylistComp onPress={modalHandle} PlaylistId={PlaylistId} /> : null}

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        data={MovieData}
        renderItem={({ item }) => {
          return (
            <MovieListComp SongName={item.name} Images={item.image} Artists={item.singer} />
          )
        }}
      />

    </View>
  )
}

export default LibraryListComp

const styles = StyleSheet.create({})