import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View, StyleSheet } from "react-native"


//Screen Components
const HomeScreen = () => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
}
//create Stack Object
const Stack = createNativeStackNavigator()

function App() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
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