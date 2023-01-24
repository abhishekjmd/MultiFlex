import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
const ProfileBottomComp = ({ heading, icon, type }) => {
    return (
        <View style={[styles.bottomRoot, styles[`bottomRoot_${type}`]]}>
            <View style={styles.bottomContainer}>
                <FontAwesome name={icon} size={25} />
                <Text style={styles.bottomText}>{heading}</Text>
            </View>
        </View>
    )
}

const ProfileComp = () => {
    const [profilePicture, setProfilePicture] = useState('')
    const options = {
        title: 'select profile picture',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        },
    };

    const handleChangeProfilePicture = async () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                // setProfilePicture(source);
                uploadProfilePicture(source, response.fileName);
            }
        });
    }

    // const up 

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={styles.userProfileContainer}>
                <TouchableOpacity style={styles.imageContainer} onPress={handleChangeProfilePicture}>
                    <Image source={{ uri: profilePicture }} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.profileText}> Abhishek Tiwari </Text>
                </View>
            </View>
            <ProfileBottomComp
                icon='bug'
                heading='Report a bug'
                type='Primary'
            />
            <ProfileBottomComp
                icon='users'
                heading='About Us'
            />
            <ProfileBottomComp
                icon='institution'
                heading='Terms and Conditions'
                type='Primary'
            />
            <ProfileBottomComp
                icon='shield'
                heading='Privacy Policy'

            />
        </View>
    )
}

export default ProfileComp

const styles = StyleSheet.create({
    userProfileContainer: {
        width: '100%',
        height: 180,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 50,
        marginBottom: 10
    },
    profileText: {
        color: 'white',
        fontSize: 18,
    },
    bottomRoot: {
        borderWidth: 1,
        borderColor: '#36454F',
        width: '99%',
        height: 60,
        justifyContent: 'center',
        borderRadius: 15
    },
    bottomRoot_Primary: {
        borderWidth: 0,

    },
    bottomContainer: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    bottomText: {
        fontSize: 16,
        marginLeft: 15
    },
})