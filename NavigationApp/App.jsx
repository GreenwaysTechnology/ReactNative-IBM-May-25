import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from "./screens/HomeScreen"
import { ProfileScreen } from "./screens/ProfileScreen"
import { PostsScreen } from "./screens/PostsScreen"
import { PostsDetailScreen } from "./screens/PostsDetailsScreen"

//create Stack Object
const Stack = createNativeStackNavigator()

function App() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Posts" component={PostsScreen} />
            <Stack.Screen name="PostsDetails" component={PostsDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default App