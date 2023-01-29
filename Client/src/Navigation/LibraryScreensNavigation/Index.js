import { createNativeStackNavigator } from '@react-navigation/native-stack'
const stack = createNativeStackNavigator()
import LibraryListScreen from '../../Screens/LibraryScreen/LibraryListScreen'
import LibraryScreen from '../../Screens/LibraryScreen/LibraryScreen'

export default function Index() {
    return (
        <stack.Navigator>
            <stack.Screen name='libraryStack' component={LibraryScreen} options={{ headerShown: false }} />
            <stack.Screen name='LibraryList' component={LibraryListScreen} options={{ headerShown: false }} />
        </stack.Navigator>
    )
}