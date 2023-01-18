import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import TopPlaylist from './TopPlaylist'
import RecommendedPlaylist from './RecommendedPlaylist'
import MoodyPlaylist from './MoodyPlaylist'
import { useDispatch, useSelector } from 'react-redux'
import { PlaylistAsync } from '../../redux/reducers/playlistReducers'

const HomeScreenComponent = () => {
    
    useEffect(() => {
    }, [])
    return (
        <ScrollView scrollEnabled={true} style={{ flex: 1 }} >
            <TopPlaylist />
            <RecommendedPlaylist />
            <MoodyPlaylist />
            {/* 
            <MoodyPlaylist />
        */}
        </ScrollView>
    )
}

export default HomeScreenComponent
