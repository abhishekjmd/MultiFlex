import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../Screens/SearchScreen/SearchScreen'
import SearchScreenVideoPlayer from '../Screens/SearchScreen/SearchScreenVideoPlayer'
const stack = createNativeStackNavigator()

const SearchStackNavigation = () => {
    return (
        <stack.Navigator>
            <stack.Screen name='Search' component={SearchScreen} />
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