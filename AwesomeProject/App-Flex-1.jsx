import { StyleSheet, Text, View } from "react-native"

//root Component
function App() {
    return <View style={styles.container}>
        <Text style={styles.label}>Hello React Native</Text>
        <Text style={{ color: 'red' }}>How are you React Native</Text>
    </View>
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        padding: 10,
        backgroundColor:'yellow'
    },
    label: {
        color: 'blue'
    }
})
export default App
