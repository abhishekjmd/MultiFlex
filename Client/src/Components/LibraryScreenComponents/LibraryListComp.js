import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { AddMovieToPlaylistComp, TopLibraryListComp } from './SubLibraryComps'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { GetLibraryAsync } from '../../redux/reducers/LibraryScreenReducers'
import MovieListComp from '../HomeScreenComponents/MovieListcomponent/MovieListComp'
import { MovieListAsync } from '../../redux/reducers/movieListReducer'

const LibraryListComp = () => {
  const route = useRoute();
  const PlaylistId = route.params.PlaylistId
  const PlaylistIndex = route.params.PlaylistIndex
  const [modalopen, setModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [response, setResponse] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const modalHandle = () => {
    setModalOpen(!modalopen);
  }

  const addPlaylistHandle = async (movieId) => {
    try {
      const res = await fetch(`https://multiflex.netlify.app/library/updateLibrary/${PlaylistId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          { movieId: movieId }
        ),
      })
      const result = await res.json();
      console.log(result)
      console.warn('LiraryId', PlaylistId)
      console.warn("movieId", movieId)
      setModalOpen(false)
      dispatch(GetLibraryAsync())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(MovieListAsync())
  }, [])
  const searchData = useSelector((state) => state.SearchReducer.MovieListData)
  const [filteredData, setFilteredData] = useState(searchData)

  const handleSearch = (text) => {
    setSearchTerm(text)
    const searchTermLowercase = text.toLowerCase();
    const newData = searchData.filter(item => {
      return item.name.toLowerCase().includes(searchTermLowercase);
    });
    setFilteredData(newData);
  }

  const AddMovieToPlaylistCompRenderItems = ({ item }) => {
    return (
      <MovieListComp SongName={item.name} Artists={item.singer} Images={item.image} type='Secondary' onAddPressed={() => { addPlaylistHandle(item._id) }} />
    )
  }

  useEffect(() => {
    dispatch(GetLibraryAsync())
  }, [])

  const LibraryPlaylistMovieData = useSelector((state) => state.LibraryReducer.GetLibrary)

  const onRefresh = async () => {
    setRefreshing(true);
    dispatch(GetLibraryAsync())
    setRefreshing(false);

  };
  return (
    <View style={{ flex: 1 }}>
      <TopLibraryListComp onPress={modalHandle} />
      {modalopen ? <AddMovieToPlaylistComp onPress={modalHandle} PlaylistId={PlaylistId} value={searchTerm} onChangeText={handleSearch} renderItem={AddMovieToPlaylistCompRenderItems} data={filteredData} /> : null}
      <ScrollView>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          data={LibraryPlaylistMovieData[PlaylistIndex].movies}
          renderItem={({ item,index }) => {
            return (
              <MovieListComp
                SongName={item.name}
                Images={item.image}
                Artists={item.singer}
                OnVideoPressed={() => {
                  navigation.navigate('SearchVideoPlayer', { Artist: item.singer, VideoIndex: item.index, Moviename: item.name, VideoList: item, coverImage: item.image })
                  console.log('Index', item.index - 1)
                }} />
            )
          }}
        />
      </ScrollView>
    </View>
  )
}

export default LibraryListComp

const styles = StyleSheet.create({})