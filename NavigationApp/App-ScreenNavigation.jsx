import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View, StyleSheet, Button } from "react-native"


//Screen Components
const HomeScreen = (props) => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Profile" onPress={() => {
            props.navigation.navigate('Profile')
        }} />
    </View>
}

const ProfileScreen = () => {
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>
}
//create Stack Object
const Stack = createNativeStackNavigator()

function App() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default App