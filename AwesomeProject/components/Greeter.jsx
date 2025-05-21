import { Text, View } from "react-native"
import { styles } from "../styles/app.style"

export function Greeter(props){
    return <View>
        <Text style={styles.label}>{props.message}</Text>
    </View>
}