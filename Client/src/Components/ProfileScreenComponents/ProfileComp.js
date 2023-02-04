import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const ProfileComp = () => {
    return (
        <ScrollView scrollEnabled={true} style={styles.root}>
            <View style={styles.mainContiner}>

                <View style={styles.topImageContainer}>
                    <Image source={require('../../Assets/resume.jpeg')} style={styles.image} resizeMode='center' />
                </View>
                <View style={styles.topTwoImageContainer}>
                    <Image source={require('../../Assets/email.jpeg')} style={styles.Twoimage} resizeMode='center' />
                </View>
                <View style={styles.topTwoImageContainer}>
                    <Image source={require('../../Assets/mobileno.jpeg')} style={styles.Twoimage} resizeMode='center' />
                </View>
                <View style={styles.topTwoImageContainer}>
                    <Image source={require('../../Assets/linkedin.jpeg')} style={styles.Twoimage} resizeMode='center' />
                </View>
                <View style={styles.skillContainer}>
                    <Image source={require('../../Assets/skills.jpeg')} style={styles.skillImage} resizeMode='center' />
                </View>
                <View style={styles.projectContainer}>
                    <Image source={require('../../Assets/project.jpeg')} style={styles.projectImage} resizeMode='center' />
                </View>
            </View>
        </ScrollView>
    )
}

export default ProfileComp

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'blue'
    },
    mainContiner: {
        height: 1200,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    topImageContainer: {
        marginTop: '5%',
        width: '95%',
        height: '19%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%',
    },
    topTwoImageContainer: {
        marginTop: '1%',
        width: '95%',
        height: '4%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1
    },
    Twoimage: {
        width: '100%',
        height: '95%'
    },
    skillContainer: {
        marginTop: '3%',
        width: '95%',
        height: '19%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: '5%',
        borderWidth: 1
    },
    skillImage: {
        width: '95%',
        height: '95%'
    },
    projectContainer: {
        marginTop: '3%',
        width: '95%',
        height: '19%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: '5%',
        borderWidth: 1
    },
    projectImage: {
        width: '95%',
        height: '100%'
    },
})