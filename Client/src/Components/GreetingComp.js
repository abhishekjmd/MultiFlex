import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Feather from 'react-native-vector-icons/Feather'
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
            <View style={styles.greetContainer}>
                <Text style={styles.greetingText}> {time < 12 ? 'Good morning' : time < 18 ? 'Lets have an Afternoon break ...' : 'Good Night'} </Text>
                <Feather name='coffee' size={25} style={{marginLeft:10}} color={'white'} />
            </View>
        </View>
    )
}

export default GreetingComp

const styles = StyleSheet.create({
    root: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
    greetContainer: {
        width: '90%',
        backgroundColor: '#36454F',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'flex-start',
      flexDirection:'row',
        // alignItems:
    },
    greetingText:{
        color:'white',
        fontSize:16,
        // fontFamily:''
    },
})