import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import MovieListComp from './MovieListComp'
import { useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'

const Index = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const MovieList = route.params.movieList

    const [response, setResponse] = useState(MovieList)
    const MusicListData = useSelector((state) => state.HomeReducer.PlaylistData);
    const playlistIndex = route.params.playlistIndex;

    useEffect(() => {
        console.log('playlistIndex', playlistIndex)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={response}
                renderItem={({ item, index }) => {
                    return (
                        <MovieListComp
                            Images={item.image}
                            SongName={item.name}
                            Artists={item.singer}
                            OnVideoPressed={() => {
                                navigation.navigate('VideoPlayer', { Moviename: item.name, VideoIndex: index, MovieUrl: item.Preview_url, MovieList: item, playlistIndex: playlistIndex, coverImage: item.image, Artist: item.singer })
                                console.warn('Movie Pressed')
                            }}
                        />
                    )
                }}
                
            />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})