
import { StyleSheet, View } from "react-native";

const App = () => {
    return <View style={styles.container}>
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        // flexDirection: 'column',
        // flexDirection: 'column-reverse',
        // flexDirection: 'row',
        flexDirection: 'row-reverse',

        backgroundColor: 'pink'
    }
})