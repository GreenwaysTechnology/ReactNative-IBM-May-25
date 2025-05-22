
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
        flexDirection: 'row',
        // flexDirection: 'column-reverse',
        // flexDirection: 'row',
        // flexDirection: 'row-reverse',
        // justifyContent: 'flex-start',
        // justifyContent: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: 'pink'
    }
})