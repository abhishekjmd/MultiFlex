import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBarComp from '../UniversalComps/SearchBarComp'
import { CreatePlaylistComp, LibraryPlaylistComp } from './SubLibraryComps'

const LibraryScreenComp = () => {
  return (
    <View>
      <SearchBarComp placeholder='Search Your Playlist..' />
      <ScrollView>
        <CreatePlaylistComp />
        <LibraryPlaylistComp />
        <LibraryPlaylistComp />
        <LibraryPlaylistComp />
        <LibraryPlaylistComp />
        <LibraryPlaylistComp />
        <LibraryPlaylistComp />
        <LibraryPlaylistComp />

      </ScrollView>
    </View>
  )
}

export default LibraryScreenComp

const styles = StyleSheet.create({})