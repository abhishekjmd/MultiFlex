import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const SplashScreen = () => {
    return (
        <View style={styles.root}>
            <View style={styles.mainContainer}>
                <View style={styles.lottieContainer}>
                    <LottieView source={require('../../Assets/walk.json')} loop={true} autoPlay={true} />
                </View>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    mainContainer:{
        width:'40%',
        height:'20%',
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    },
    lottieContainer: {
        width: '95%',
        height: '95%'
    },

})