import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import LottieView from 'lottie-react-native'
import FormInputComp from './FormInputComp'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup'
import auth from '@react-native-firebase/auth'
const OtpVerificationComp = () => {
    const route = useRoute()
    const confirmResult = route.params?.confirmResult;
    const navigation = useNavigation();
    const loginhandle = async (values) => {
        try {
            const verificationCode = values.verificationCode;
            const credentials = auth.PhoneAuthProvider.credential(
                confirmResult.verificationId,
                verificationCode
            )
            await auth().signInWithCredential(credentials);
            Alert.alert('Success', 'Phone authentication successful!');
            navigation.navigate('Tabs')
        } catch (error) {
            console.log('error', error.message)
        }

    }

    const validationSchema = yup.object().shape({
        verificationCode: yup.string().matches(/^\d{6}$/, 'Phone number must start with a + symbol followed by country code (1-3 digits) and then phone number ').required('Phone number is required')
    })

    const initialValues = {
        verificationCode: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={loginhandle}
        >
            {({ handleChange, handleSubmit, values, errors }) => (

                <View style={styles.root}>
                    <View style={styles.LottieContainer}>
                        <LottieView source={require('../../Assets/verification.json')} autoPlay loop />
                    </View>
                    <FormInputComp value={values.verificationCode} onChangeText={handleChange('verificationCode')} InputText='Verification code' placeholder='Enter  Verification code ' />
                    <TouchableOpacity style={styles.verificationContainer} onPress={handleSubmit} >
                        <Text style={styles.verificationText}> Login </Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

export default OtpVerificationComp

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    LottieContainer: {
        width: '100%',
        height: 300,
        marginBottom: '10%'
    },
    verificationContainer: {
        borderWidth: 1,
        width: '90%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: '5%',
    },
    verificationText: {
        color: 'black',
        fontSize: 18
    },
})