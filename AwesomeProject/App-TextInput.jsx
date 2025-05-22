import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const TextInputComponent = () => {
    const [text, onChangeText] = useState('Welcome')
    const [number, onChangeNumber] = useState(0)

    return <View>
        <TextInput style={styles.input} value={text} onChangeText={onChangeText} />
        <Button title='Show Text' onPress={() => {
            Alert.alert(text)
        }} />
        <TextInput keyboardType="numeric" style={styles.input} value={number} onChangeText={onChangeNumber} />
        <Button title='Show Number' onPress={() => {
            let a = 100
            let result = a * parseInt(number)
            Alert.alert(result.toString())
        }} />
    </View>
}
const App = () => (
    <View style={styles.container}>
        <TextInputComponent />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:50,
        backgroundColor: 'pink'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});

export default App;

