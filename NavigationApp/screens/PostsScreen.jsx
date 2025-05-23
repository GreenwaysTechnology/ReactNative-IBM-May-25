import { Text, View, Button } from "react-native"
import { styles } from "../styles/app.styles"
import { Posts } from "../components/Posts"

//Screen Components
const PostsScreen = (props) => {
    return <View style={styles.container}>
        <Posts navigation={props.navigation} />
    </View>
}
export { PostsScreen }