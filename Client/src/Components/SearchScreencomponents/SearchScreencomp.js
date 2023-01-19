import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { MovieListAsync } from '../../redux/reducers/movieListReducer'
import MovieListComp from '../HomeScreenComponents/MovieListcomponent/MovieListComp'
import { useNavigation } from '@react-navigation/native'

const SearchScreencomp = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const searchDatafunction = useCallback(() => {
        dispatch(MovieListAsync());
    }, [dispatch])


    useEffect(() => {
        searchDatafunction();
    }, [searchDatafunction])


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

    return (
        <View style={styles.root}>
            <View style={styles.MainContainer}>
                <View style={styles.SearchContainer}>
                    <TextInput placeholder='Find your favorite videos...' style={styles.textInput} value={searchTerm} onChangeText={handleSearch} placeholderTextColor='#d5ded7' />
                    <Ionicons name='search' size={30} style={styles.Icon} />
                </View>
            </View>
            <View>
                <FlatList
                    data={filteredData}
                    renderItem={({ item }) => {
                        return (
                            <MovieListComp
                                Images={item.image}
                                SongName={item.name}
                                Artists={item.singer}
                                OnVideoPressed={() => {
                                    navigation.navigate('SearchVideoPlayer', { MusicName: item.name, VideoIndex: item.index - 1, MovieUrl: item.Preview_url, VideoList: searchData })
                                    console.log('Index', item.index - 1)
                                }}
                            />
                        )
                    }}
                />
            </View>

        </View>
    )
}

export default SearchScreencomp

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'black'
    },
    MainContainer: {
        alignItems: 'center',
        width: '100%',
        height: 60,
        marginTop: 10
    },
    SearchContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: '95%',
        height: '100%',
        borderRadius: 10,
        borderColor: '#36454F',
        borderWidth: 1
    },
    textInput: {
        fontSize: 20,
        color: 'white'
    },
    Icon: {
        color: 'white',
        backgroundColor: '#36454F',
        padding: 8,
        borderRadius: 10
    },
})