import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import FormInputComp from '../FormInputComp'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup'

const SignUpScreenComp = () => {
    const navigation = useNavigation()
    const loginhandle = () => {
        navigation.navigate('Login')
    }

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    }

    const validationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Enter a valid email').required('Email is required'),
        password: yup.string().min(8, "Password must have at least 8 characters").required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
        phone: yup.string().matches(/^[0-9]+$/, 'Phone number can only contain numbers').required('Phone number is required')
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (


                <View style={styles.mainContainer}>
                    <View style={styles.LottieContainer}>
                        <LottieView source={require('../../../Assets/television.json')} autoPlay loop />
                    </View>
                    <View style={styles.FormContainer}>
                        <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} style={{ width: '100%' }}>
                            <FormInputComp value={values.name} onChangeText={handleChange('name')} InputText='Name' placeholder='Name' />
                            {errors.name && <Text style={{ color: 'black' }}>{errors.name}</Text>}

                            <FormInputComp value={values.email} onChangeText={handleChange('email')} InputText='Email' placeholder='Email' />
                            {errors.email && <Text style={{ color: 'black' }}>{errors.email}</Text>}

                            <FormInputComp value={values.phone} onChangeText={handleChange('phone')} InputText='Mobile Number' placeholder='Mobile Number' />
                            {errors.phone && <Text style={{ color: 'black' }}>{errors.phone}</Text>}

                            <FormInputComp value={values.password} onChangeText={handleChange('password')} InputText='Password' placeholder='Password' />
                            {errors.password && <Text style={{ color: 'black' }}>{errors.password}</Text>}

                            <FormInputComp value={values.confirmPassword} onChangeText={handleChange('confirmPassword')} InputText='Confirm Password' placeholder='Confirm Password' />
                            {errors.confirmPassword && <Text style={{ color: 'black' }}>{errors.confirmPassword}</Text>}
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.signupContainer} onPress={handleSubmit}>
                        <Text style={styles.signupText}> Register User </Text>
                    </TouchableOpacity>
                    <View style={styles.alreadyContainer}>
                        <Text style={{ color: 'black' }}>Already have an account?</Text>
                        <TouchableOpacity style={styles.loginContainer} onPress={loginhandle}>
                            <Text style={{ color: 'blue', }}> Login </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </Formik>

    )
}

export default SignUpScreenComp

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    LottieContainer: {
        width: '100%',
        height: '20%',
    },
    FormContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c0d6e4',
        width: '95%',
        height: '58%',
        borderRadius: 15,
        borderWidth: 1,
    },
    signupContainer: {
        borderWidth: 1,
        width: '95%',
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
    alreadyContainer: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%'
    },
})