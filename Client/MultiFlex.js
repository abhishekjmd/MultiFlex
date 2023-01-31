import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import DeviceInfo from 'react-native-device-info'
import { useState } from 'react'
import AuthNavigation from './src/Navigation/AuthNavigation.js/AuthNavigation'
import VerifiedAuthNavigation from './src/Navigation/AuthNavigation.js/VerifiedAuthNavigation'
import LoginAuthNavigation from './src/Navigation/AuthNavigation.js/LoginAuthNavigation'

const MultiFlex = () => {
    const [deviceID, setDeviceId] = useState('')
    const [verified, setVerified] = useState(true)
    const [fetchDeviceID, setFetchDeviceID] = useState('')
    const [fetchVerified, setFetchVerified] = useState('')
    const dispatchApi = async () => {
        try {
            const deviceID = await DeviceInfo.getUniqueId()
            setDeviceId(deviceID)
            console.log('deviceid', deviceID)
            const res = await fetch('https://multiflex.netlify.app/user/allUsers')
            const result = await res.json()
            result.forEach(item => {
                console.log('apidata', item.deviceID)
                console.log('verificationstatus', item.isVerified, item.deviceID);
                setFetchDeviceID(item.deviceID)
                setFetchVerified(item.isVerified)
            });

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        dispatchApi()
    }, [dispatchApi])

    const RenderFunction = () => {
        if (deviceID === fetchDeviceID) {
            if (verified === fetchVerified) {
                return <VerifiedAuthNavigation />
            } else {
                return <LoginAuthNavigation />
            }
        } else {
            return <AuthNavigation />
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