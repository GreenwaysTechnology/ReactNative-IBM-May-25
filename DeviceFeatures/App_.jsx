
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

const App = () => {
    const device = useCameraDevice('back')

    useEffect(() => {
        console.log('Available devices:', device);
    }, [device]);

    useEffect(() => {
        const requestPermission = async () => {
            const cameraPermission = await Camera.requestCameraPermission();
            const microphonePermission = await Camera.requestMicrophonePermission();

            if (cameraPermission !== 'authorized' || microphonePermission !== 'authorized') {
                Alert.alert('Permission denied', 'Camera or Microphone permission is required.');
            }
        };

        requestPermission();
    }, []);

    if (device == null) {
        return <Text>Loading camera...</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
            />
            <View style={styles.buttonContainer}>
                <Button title="Capture" onPress={() => Alert.alert('Feature not implemented')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
});

export default App;