import { FlatList, StyleSheet, View, Text } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import DeviceInfo from 'react-native-device-info'
import { useState } from 'react'
import AuthNavigation from './src/Navigation/AuthNavigation.js/AuthNavigation'
import VerifiedAuthNavigation from './src/Navigation/AuthNavigation.js/VerifiedAuthNavigation'
import LoginAuthNavigation from './src/Navigation/AuthNavigation.js/LoginAuthNavigation'

const MultiFlex = () => {
    const [response, setResponse] = useState([])
    const [userVerified, setUserVerified] = useState('')
    const disptachFunction = useCallback(() => {
        const dispatchApi = async () => {
            try {
                const deviceID = await DeviceInfo.getUniqueId()
                const res = await fetch('https://multiflex.netlify.app/user/allUsers')
                const result = await res.json()
                console.log('response', result)
                const DeviceVerified = await result.some(item => item.deviceID === deviceID)
                const userVerified = await result.some(item => item.isVerified === true)
                setResponse(DeviceVerified)
                setUserVerified(userVerified)
            } catch (error) {
                console.log(error)
            }
        }
        dispatchApi()
    }, [])

    useEffect(() => {
        disptachFunction()
    }, [])

    const RenderFunction = () => {
        if (response) {
            if (userVerified) {
                return (
                    <VerifiedAuthNavigation />
                )
            } else {
                return (
                    <LoginAuthNavigation />
                )
            }

        } else {
            return (
                console.log(false),
                <AuthNavigation />
            )
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <RenderFunction />
        </View>
    )
}

export default MultiFlex

const styles = StyleSheet.create({})