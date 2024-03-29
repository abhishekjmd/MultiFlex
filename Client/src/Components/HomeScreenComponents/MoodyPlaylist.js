import { StyleSheet, Text, View, FlatList, Pressable, Image, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlaylistComp from './PlaylistComp'
import { PlaylistAsync } from '../../redux/reducers/playlistReducers'
import { useNavigation } from '@react-navigation/native'


const MoodyPlaylist = () => {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    dispatch = useDispatch();
    const playlistDataFunction = async () => {
        try {
            setLoading(true);
            await dispatch(PlaylistAsync());
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        playlistDataFunction();
    }, [])

    const playlistData = useSelector((state) => state.HomeReducer.PlaylistData.slice(8, 12))

    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.root}>
                <Text style={styles.text}> Being Happy </Text>
                <FlatList
                    horizontal
                    data={playlistData}
                    renderItem={({ item, index }) => {
                        return (
                            <PlaylistComp
                                Images={item.coverImage}
                                TopplaylistName={item.name}
                                PlaylistCompPressed={() => { navigation.navigate('MovieList', { movieList: item.movies, playlistIndex: index + 8 }) }}
                            />

                        )
                    }}
                />
            </View>
        </View>
    )
}

export default MoodyPlaylist

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#36454F',
        borderRadius: 15,
        padding: 10,
        height: 280,
        width: '96%',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#36454F'
    },
    text: {
        fontWeight: '500',
        color: 'white',
        fontSize: 16,
        textTransform: 'capitalize'
    },
})