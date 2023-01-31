import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import LottieView from 'lottie-react-native'
import FormInputComp from '../FormInputComp'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { LogInAsync } from '../../../redux/reducers/AuthReducers'

const LoginScreenComp = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const initialValues = {
        phone: ''
    }

    const validationSchema = yup.object().shape({
        phone: yup.string().matches(/^\+\d{1,3}\d{10}$/, 'Phone number must start with a + symbol followed by country code (1-3 digits) and then phone number ').required('Phone number is required')
    })

    const verificationhandle = useCallback((values) => {
        const phone = values.phone;
        dispatch(LogInAsync(phone))
        navigation.navigate('Verify', { phone })
        console.log(phone)
    }, [])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={verificationhandle}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View style={styles.root}>
                    <View style={styles.LottieContainer}>
                        <LottieView source={require('../../../Assets/login.json')} autoPlay loop />
                    </View>
                    <FormInputComp value={values.phone} onChangeText={handleChange('phone')} InputText='Mobile Number' placeholder='Mobile Number' />
                    {errors.phone && <Text style={{ color: 'black' }}>{errors.phone}</Text>}
                    <TouchableOpacity style={styles.signupContainer} onPress={handleSubmit}>
                        <Text style={styles.signupText}> Send Verification Code </Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

export default LoginScreenComp

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
        height: 300
    },
    signupContainer: {
        borderWidth: 1,
        width: '90%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: '5%',
    },
    signupText: {
        color: 'black',
        fontSize: 18
    },
})