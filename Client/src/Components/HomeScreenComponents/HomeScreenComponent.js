import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import TopPlaylist from './TopPlaylist'
import RecommendedPlaylist from './RecommendedPlaylist'
import MoodyPlaylist from './MoodyPlaylist'

const HomeScreenComponent = () => {
    return (
        <ScrollView scrollEnabled={true} style={{flex:1}} >
            <TopPlaylist />
            <RecommendedPlaylist />
            <MoodyPlaylist />
            <MoodyPlaylist />

        </ScrollView>
    )
}

export default HomeScreenComponent
