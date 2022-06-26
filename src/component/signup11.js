import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';

export default class signup11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
        };
    }

    getPermissionAsync = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert('Hey! You might want to enable Location for my app, they are good.');
        } else {

            let location = await Location.getCurrentPositionAsync({});
            let latitude = location.coords.latitude
            let longitude = location.coords.longitude

            this.setState({
                latitude: latitude,
                longitude: longitude,
            })

            this.props.navigation.navigate('home2')

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/background.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
                    <ScrollView style={{ padding: 10 }}>
                        <View style={{ alignItems: 'center', marginTop: HEIGHT / 10, marginBottom: 40 }}>
                            <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }}>Subtle won’t work without you!</Text>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 30 }}>Subtle uses your location help you connect with other nearby users. Subtle never shares your exact location</Text>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 25 }}>Make sure to click “Always Allow”</Text>

                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 250, height: 250 }} source={require('../image/img/map.png')} />
                        </View>

                    </ScrollView>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => this.getPermissionAsync()}>
                            <LinearGradient
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}
                                colors={['#71a6f0', '#71a6f0', '#3779d5']}
                                style={styles.continueButtonStyle}
                            >
                                <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                                    Share Location
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    continueButtonStyle: {
        borderRadius: 500,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: 55.0,
        marginBottom: 0,
        width: WIDTH - 55,
    },
    firstInput: {
        width: WIDTH - 55,
        marginTop: 0,
        marginHorizontal: 0,
        backgroundColor: '#f4f4f4',
        borderRadius: 50,
        padding: 5,
        alignSelf: 'center'
    },

    input: {
        width: WIDTH - 55,
        height: 50,
        padding: 10,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: '#98b4db',
        fontSize: 25,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        width: 160,
        height: 160,
        alignSelf: 'center',
    },
    loginbutton: {
        backgroundColor: '#fff',
        padding: 1,
        marginTop: 10,
        marginBottom: 30,
        marginRight: 5,
        marginLeft: 13,
        borderRadius: 50,
        width: '45%',
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    Registerbutton: {
        backgroundColor: '#f52877',
        padding: 1,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 50,
        width: '45%',
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
});