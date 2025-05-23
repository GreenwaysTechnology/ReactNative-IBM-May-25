import { Text,View } from "react-native"
import { styles } from "../styles/app.styles"

const PostsDetailScreen = props => {
    const { title, body } = props.route.params
    return <View style={styles.container}>
        <Text style={{ fontSize: 25, color: 'blue' }}>{title}</Text>
        <Text style={{ fontSize: 20, color: 'red' }}>{body}</Text>
    </View>
}
export { PostsDetailScreen }