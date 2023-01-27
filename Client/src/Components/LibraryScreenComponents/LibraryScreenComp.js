import { FlatList, RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import SearchBarComp from '../UniversalComps/SearchBarComp'
import { DeleteLibraryAsync, GetLibraryAsync } from '../../redux/reducers/LibraryScreenReducers'
import { CreatePlaylistComp, LibraryPlaylistComp, LibraryPlaylistModalComponent } from './SubLibraryComps'

const LibraryScreenComp = () => {
  const [modalopen, setModalOpen] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const oncreatenewPlaylistPressed = () => { setModalOpen(!modalopen) }
  const modalclose = () => { setModalOpen(!modalopen) }

  const handleDelete = (id) => {
    dispatch(DeleteLibraryAsync(id))
    dispatch(GetLibraryAsync())
  }
  const dispatchFunction = useCallback(() => {
    dispatch(GetLibraryAsync())
  }, [dispatch])

  // const handleDelete = (id) => {
  //   dispatch(DeleteLibraryAsync(id))
  //   dispatch(GetLibraryAsync())
  // }
  useEffect(() => {
    dispatchFunction()
  }, [dispatchFunction]
  )

  const LibraryPlaylistData = useSelector((state) => state.LibraryReducer.GetLibrary)



  const onRefresh = () => {
    setRefreshing(true);
    dispatchFunction();
    setRefreshing(false);
  }
  return (
    <View>
      <ScrollView>
        <CreatePlaylistComp onPress={oncreatenewPlaylistPressed} />
        {modalopen ?
          <LibraryPlaylistModalComponent onPress={modalclose} />
          :
          null
        }

        <FlatList
          data={LibraryPlaylistData}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          renderItem={({ item }) => {
            return (
              <LibraryPlaylistComp
                PlaylistName={item.name}
                imageOne={item.movies[0] ? item.movies[0].image : null}
                imageTwo={item.movies[1] ? item.movies[1].image : null}
                imageThree={item.movies[2] ? item.movies[2].image : null}
                imageFour={item.movies[3] ? item.movies[3].image : null}
                onDeletePress={() => { handleDelete(item._id) }}
                OnPlaylistPressed={() => { navigation.navigate('LibraryList', { PlaylistId: item._id, MovieData: item.movies }) }}
              />
            )
          }}
        />
      </ScrollView>
    </View>
  )
}

export default LibraryScreenComp

const styles = StyleSheet.create({})