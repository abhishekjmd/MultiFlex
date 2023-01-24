import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
export const CreatePlaylistComp = () => {
    return (
        <View style={styles.CreatePlaylistRoot}>
            <View style={styles.CreatePlaylistMainContainer}>
                <View style={styles.createPlaylistTextContainer}>
                    <Text style={styles.createPlaylistText}> create new </Text>
                </View>
                <View style={styles.createPlaylistImageContainer}>
                    <Image source={require('../../Assets/finalplay.png')} style={styles.createPlaylistImage} resizeMode='center' />
                </View>
            </View>
        </View>
    )

}

export const LibraryPlaylistComp = ({ PlaylistName, image, Owner, OnPlaylistPressed }) => {
    return (
        <Pressable style={styles.libraryPlaylistRoot}>
            <View style={styles.libraryPlaylistContainer} onPress={OnPlaylistPressed}>
                <View style={styles.libraryPlayImgContainer}>
                    <View style={styles.libraryPlayFirstImgContainer}>
                        <Image
                            source={require('../../Assets/apnaBanaLey.jpg')}
                            style={styles.libraryImage}
                        />
                        <Image
                            source={require('../../Assets/nainaDaKyaKasoor.jpg')}
                            style={styles.libraryImage}
                        />
                    </View>
                    <View style={styles.libraryPlaySecondImgContainer}>
                        <Image
                            source={require('../../Assets/phirSeUdChala.jpg')}
                            style={styles.libraryImage}
                        />
                        <Image
                            source={require('../../Assets/namoNamo.jpg')}
                            style={styles.libraryImage}
                        />
                    </View>
                </View>
                <View style={styles.libraryTxtContainer}>
                    <Text style={styles.libraryTopTxt}> PlaylistName </Text>
                    <AntDesign name='delete' size={25} color='white' />
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    CreatePlaylistRoot: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
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
        height:'80%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'green'
    },
    libraryTopTxt: {
        fontSize: 19,
        fontWeight: '500',
        color: 'white',
    },

})