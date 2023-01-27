import { StyleSheet, Text, View, Image, Pressable, TextInput, KeyboardAvoidingView, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'
import { GetLibraryAsync, PostLibraryAsync, UpdateLibraryAsync } from '../../redux/reducers/LibraryScreenReducers'
import SearchBarComp from '../UniversalComps/SearchBarComp'
import MovieListComp from '../HomeScreenComponents/MovieListcomponent/MovieListComp'
import { MovieListAsync } from '../../redux/reducers/movieListReducer'

export const CreatePlaylistComp = ({ onPress }) => {
    return (
        <View style={styles.CreatePlaylistRoot}>
            <View style={styles.CreatePlaylistMainContainer}>
                <Pressable style={styles.createPlaylistTextContainer} onPress={onPress}>
                    <Text style={styles.createPlaylistText}> create new </Text>
                </Pressable>
                <View style={styles.createPlaylistImageContainer}>
                    <Image source={require('../../Assets/finalplay.png')} style={styles.createPlaylistImage} resizeMode='center' />
                </View>
            </View>
        </View>
    )

}

export const LibraryPlaylistComp = ({ PlaylistName, OnPlaylistPressed, imageOne, imageTwo, imageThree, imageFour, onDeletePress }) => {
    return (
        <View style={styles.libraryPlaylistRoot}>
            <Pressable style={styles.libraryPlaylistContainer} onPress={OnPlaylistPressed}>
                <View style={styles.libraryPlayImgContainer}>
                    <View style={styles.libraryPlayFirstImgContainer}>
                        <Image
                            source={{ uri: imageOne }}
                            style={styles.libraryImage}
                        />
                        <Image
                            source={{ uri: imageTwo }}
                            style={styles.libraryImage}
                        />
                    </View>
                    <View style={styles.libraryPlaySecondImgContainer}>
                        <Image
                            source={{ uri: imageThree }}
                            style={styles.libraryImage}
                        />
                        <Image
                            source={{ uri: imageFour }}
                            style={styles.libraryImage}
                        />
                    </View>
                </View>
                <View style={styles.libraryTxtContainer}>
                    <Text style={styles.libraryTopTxt}> {PlaylistName} </Text>
                    <AntDesign name='delete' size={25} color='white' onPress={onDeletePress} />
                </View>
            </Pressable>
        </View>
    )
}

export const LibraryPlaylistModalComponent = ({ onPress }) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(PostLibraryAsync(value));
        dispatch(GetLibraryAsync())
        console.warn(value);
    }

    return (
        <KeyboardAvoidingView style={styles.libraryModalRoot}>
            <View style={styles.libraryModalContainer}>
                <Pressable style={styles.libraryIconContainer} onPress={onPress}>
                    <MaterialIcons name='cancel' color='black' size={40} />
                </Pressable>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.libraryModalTextContaner}>
                        <Text style={styles.libraryModalText}>Bringing the music to life, one video at a time.</Text>
                    </View>
                    <View style={styles.libraryModalImageContainer}>
                        <Image source={require('../../Assets/Capture.jpeg')} style={styles.libraryModalImage} resizeMode='center' />
                    </View>
                </View>
                <View style={styles.libraryModalTextInputContainer}>
                    <TextInput style={styles.libraryModalTextInput} value={value} onChangeText={(e) => setValue(e)} onSubmitEditing={handleSubmit} placeholder='craft the ultimate experience...' placeholderTextColor='black' />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export const TopLibraryListComp = ({ onPress }) => {
    return (
        <View style={styles.TopLibraryRoot}>
            <View style={styles.TopLibraryFirstContaner}>
                <Text style={{ color: 'black' }}> lets start building your playlist </Text>
            </View>
            <Pressable style={styles.TopLibrarySecondContainer} onPress={onPress} >
                <Text style={styles.TopLibrarySecondText}> Add to this playlist </Text>
            </Pressable>

        </View>
    )
}

export const AddMovieToPlaylistComp = ({ onPress, PlaylistId }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch();

    // const PlaylistId = PlaylistId;


    const addPlaylistHandle = async (movieId) => {
        // dispatch(UpdateLibraryAsync({ PlaylistId, movieId }))
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
            dispatch(GetLibraryAsync())
            console.warn('LiraryId', PlaylistId)
            console.warn("movieId", movieId)

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
    return (
        <View style={styles.AddMovieToPlaylistRoot}>
            <View style={styles.AddMovieToPlaylistContainer}>
                <View style={styles.AddMovieToPlaylistSubContainer}>
                    <Pressable style={styles.AddMovieToPlaylistIconContainer} onPress={onPress}>
                        <MaterialIcons name='cancel' color='white' size={40} />
                    </Pressable>
                    <View style={styles.AddMovieToPlaylistSearchBarComp}>
                        <SearchBarComp value={searchTerm} onChangeText={handleSearch} placeholder='search videos ...' />
                    </View>

                    <FlatList
                        data={filteredData}
                        renderItem={({ item }) => {
                            return (
                                <MovieListComp SongName={item.name} Artists={item.singer} Images={item.image} type='Secondary' onAddPressed={() => { addPlaylistHandle(item._id) }} />
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CreatePlaylistRoot: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        // position:'absolute'
    },
    CreatePlaylistMainContainer: {
        marginTop: 20,
        backgroundColor: 'white',
        height: '100%',
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 15,
        alignItems: 'center'
    },
    createPlaylistTextContainer: {
        width: '35%',
        height: '30%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        marginLeft: '2%'
    },
    createPlaylistText: {
        color: 'white',
        fontSize: 20,
        textTransform: 'capitalize'
    },
    createPlaylistImageContainer: {
        height: '100%',
        width: '60%',
    },
    createPlaylistImage: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    },
    libraryPlaylistRoot: {
        width: '100%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    libraryPlaylistContainer: {
        width: '95%',
        backgroundColor: 'black',
        flexDirection: 'row',
        height: '100%',
        borderColor: '#36454F',
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center'
    },
    libraryPlayImgContainer: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        left: 10,
    },
    libraryPlayFirstImgContainer: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    libraryPlaySecondImgContainer: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    libraryImage: {
        width: '50%',
        height: '100%',
        borderRadius: 5
    },
    libraryTxtContainer: {
        left: 25,
        width: '70%',
        height: '80%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    libraryTopTxt: {
        fontSize: 19,
        fontWeight: '500',
        color: 'white',
    },
    libraryModalRoot: {
        marginTop: 25,
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    libraryModalContainer: {
        width: '95%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
    },
    libraryIconContainer: {
        width: '20%',
        height: '15%',
        position: 'absolute',
        bottom: '81%'
    },
    libraryModalTextContaner: {
        marginTop: '5%',
        width: '49%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    libraryModalText: {
        marginLeft: '2%',
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
    },
    libraryModalImageContainer: {
        marginTop: '5%',
        width: '49%',
        height: '60%',
    },
    libraryModalImage: {
        width: '100%',
        height: '100%',
    },
    libraryModalTextInputContainer: {
        marginBottom: '3%',
        marginLeft: '2%',
        width: '95%',
        height: '20%',
        borderRadius: 10,
        borderColor: '#36454F',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    libraryModalTextInput: {
        fontSize: 20,
        color: 'black',
    },
    TopLibraryRoot: {
        width: '100%',
        height: 120,
        backgroundColor: '#E1E1D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15
    },
    TopLibrarySecondContainer: {
        marginTop: '2%',
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 25
    },
    TopLibrarySecondText: {
        color: 'white',
        fontSize: 18
    },
    AddMovieToPlaylistRoot: {
        width: '100%',
        height: 500,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: '5%'
    },
    AddMovieToPlaylistContainer: {
        width: '95%',
        height: '100%',
        backgroundColor: 'black',
        borderRadius: 15,
        borderWidth: 4,
        borderColor: 'white'
    },
    AddMovieToPlaylistSearchBarComp: {
        width: '95%',
        marginBottom: '5%'
    },
    AddMovieToPlaylistSubContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '95%',
        borderRadius: 15,
    },
    AddMovieToPlaylistIconContainer: {
        position: 'relative',
        right: '40%',
        marginTop: '2%'
    },
})