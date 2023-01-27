import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const Greetfunctioncomp = ({ text, image }) => {
    return (
        <View style={styles.greetMainContainer}>
            <View style={styles.TextContainer}>
                <Text style={styles.Text}> {text} </Text>
            </View>
            <View style={styles.ImageContainer}>
                <Image source={image} style={styles.Image} resizeMode='center' />
            </View>
        </View>
    )
}

const GreetingComp = () => {
    const [time, setTime] = useState(new Date().getHours());
    useEffect(() => {
        const TimeInterval = setInterval(() => {
            setTime(new Date().getHours());
        }, 1000);
        return () => clearInterval(TimeInterval)
    }, [])

    return (
        <View style={styles.root}>
            {
                time < 12 ?
                    <Greetfunctioncomp text='Let the music of the morning set the tone for your day' image={require('../../Assets/morning.jpeg')} />
                    : time < 17 ?
                        <Greetfunctioncomp text='Music is the perfect companion for an afternoon pick-me-up.' image={require('../../Assets/afternoon.jpeg')} />
                        : time < 21 ?
                            <Greetfunctioncomp text='Music is the soundtrack to your dreams.' image={require('../../Assets/afternoon.jpeg')} />
                            :
                            <Greetfunctioncomp text='Let the music of the evening soothe your soul' image={require('../../Assets/night.jpeg')} />
            }
        </View>
    )
}

export default GreetingComp

const styles = StyleSheet.create({
    root: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    greetMainContainer: {
        marginTop: 20,
        backgroundColor: 'white',
        height: '100%',
        width: '95%',
        flexDirection: 'row',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    TextContainer: {
        marginRight: '3%',
        width: '40%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    Text: {
        marginLeft: '2%',
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Caveat',

    },
    ImageContainer: {
        height: '100%',
        width: '50%',
    },
    Image: {
        height: '100%',
        width: '100%',
    },
})