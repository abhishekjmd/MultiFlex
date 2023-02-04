import { createNativeStackNavigator } from '@react-navigation/native-stack'
const stack = createNativeStackNavigator()
import SearchScreen from '../../Screens/SearchScreen/SearchScreen'
import SearchScreenVideoPlayer from '../../Screens/SearchScreen/SearchScreenVideoPlayer'

const SearchStackNavigation = () => {
    return (
        <stack.Navigator>
            <stack.Screen name='Searchstack' component={SearchScreen} options={{ headerShown: false }} />
            <stack.Screen name='SearchVideoPlayer' component={SearchScreenVideoPlayer}
                options={{
                    'headerStyle': {
                        backgroundColor: 'black',
                    },
                    title: null,
                    headerTintColor: 'white'
                }}
            />
        </stack.Navigator>
    )
}

export default SearchStackNavigation