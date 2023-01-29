import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieListScreen from '../../Screens/HomeScreen/MovieListScreen'
import HomeScreen from '../../Screens/HomeScreen/HomeScreen'
import VideoPlayerScreen from '../../Screens/VideoPlayerScreen/VideoPlayerScreen'
import SearchScreen from '../../Screens/SearchScreen/SearchScreen'
import SignUpScreen from '../../Screens/AuthenticationScreen/SignUpScreen'

const stack = createNativeStackNavigator()
const Navigation = () => {
    return (
        <stack.Navigator>
            <stack.Screen name='home' component={HomeScreen}
                options={{
                    title: null,
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                }}
            />
            <stack.Screen name='MovieList' component={MovieListScreen} />
            <stack.Screen name='VideoPlayer' component={VideoPlayerScreen}
                options={{
                    'headerStyle': {
                        backgroundColor: 'black',
                    },
                    title: null,
                    headerTintColor: 'white'
                }}
            />
            <stack.Screen name='searchstackscreen' component={SearchScreen} />

        </stack.Navigator>

    )
}

export default Navigation