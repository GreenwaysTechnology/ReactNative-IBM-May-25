import { Text, View, Button } from "react-native"
import { styles } from "../styles/app.styles"
//Screen Components
const HomeScreen = (props) => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Profile" onPress={() => {
            props.navigation.navigate('Profile', { id: 1, name: 'Subramanian' })
        }} />
        <Button title="Post" onPress={() => {
            props.navigation.navigate('Posts')
        }} />
    </View>
}
export { HomeScreen }