import { Text, View, Button } from "react-native"
import { styles } from "../styles/app.styles"

const ProfileScreen = (props) => {
    const profile = props.route.params
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>Id : {profile.id}</Text>
        <Text>Name : {profile.name}</Text>
    </View>
}
export { ProfileScreen }