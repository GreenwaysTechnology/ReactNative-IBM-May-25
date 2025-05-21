import { StyleSheet, Text, View } from "react-native"
import { styles } from "./styles/app.style"

//root Component
function App() {
    return <View style={styles.container}>
        <Text style={styles.label}>Hello React Native</Text>
        <Text style={{ color: 'red' }}>How are you React Native</Text>
    </View>
}
// export const styles = StyleSheet.create({
//     container: {
//         margin: 50,
//         padding: 10
//     },
//     label: {
//         color: 'blue'
//     }
// })
export default App
