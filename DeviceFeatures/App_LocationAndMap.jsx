import React, { useEffect, useState } from 'react';
import { View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



function App() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (Platform.OS === 'android') {
            requestLocationPermission();
        }
        getCurrentLocation();
    }, []);

    // Function to get current location
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((position) => {
            setLocation(position.coords);
        },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };
    // Request location permission for Android
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'We need access to your location to show it on the map.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Location permission granted');
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

 return (
        <View style={{ flex: 1 }}>
            {location ? (
                <MapView
                    style={{ flex: 1 }}
                    region={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker coordinate={location} title="Your Location" />
                </MapView>
            ) : (
                <Text>Fetching location...</Text>
            )}

            <Button title="Get Location" onPress={getCurrentLocation} />
        </View>
    );}
export default App