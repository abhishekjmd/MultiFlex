import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GreetingComp from '../GreetingComp'
import { useDispatch, useSelector } from 'react-redux'
import { PlaylistAsync } from '../../redux/reducers/playlistReducers'
import PlaylistComp from './PlaylistComp'


const TopPlaylist = () => {
    const [response, setResponse] = useState('')
    const dispatch = useDispatch();

    const playlistData = useSelector((state) => state.HomeReducer.PlaylistData)
    const dispatchFunction = async () => {
        try {
            await dispatch(PlaylistAsync())
            const result = await playlistData.slice(0, 2)
            setResponse(playlistData.slice(0, 4))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        dispatchFunction()
    }, [])
    return (
        <View style={{ alignItems: 'center' }}>

            <View style={styles.root}>
                <Text style={styles.text}> Mood Like Bollywood </Text>
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

export default TopPlaylist

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#36454F',
        borderRadius: 15,
        padding: 10,
        height: 280,
        width: '96%',
        marginBottom: 10
    },
    text: {
        fontWeight: '500',
        color: 'white',
        fontSize: 16,
        textTransform: 'capitalize'
    },

})