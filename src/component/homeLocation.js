import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import RangeSlider, { Slider } from 'react-native-range-slider-expo';

export default class homeLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/background.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
                    <ScrollView>
                        <View >
                            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 40, marginRight: 10, marginBottom: - 20 }} onPress={() => this.props.navigation.goBack(null)}>
                                <FontAwesome5 style={{ marginRight: 20 }} name='times' color='#ffffff' size={40} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: HEIGHT / 35, marginBottom: 20, padding: 20 }}>
                            <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }}>Home Location</Text>
                            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginTop: 30 }}>Locate your home so Subtle can
                                automatically turn off your location
                                when you are within your desired
                                distance from home. </Text>
                        </View>

                        <View style={{ paddingLeft: 20 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 250, height: 250 }} source={require('../image/img/map.png')} />
                            </View>

                            <View >
                                <Slider min={0} max={40} step={4}
                                    valueOnChange={value => this.setState({ value: value })}
                                    initialValue={0}
                                    knobColor='#00A2ff'
                                    valueLabelsBackgroundColor='#3A4766'
                                    inRangeBarColor='#ffffff'
                                    outOfRangeBarColor='#ffffff'
                                    styleSize={'small'}
                                    showValueLabels={true}
                                    showRangeLabels={false}
                                />
                                <Text style={{ color: '#ffffff', alignSelf: 'flex-end', fontSize: 22, marginTop: -30, marginRight: 40 }}>{this.state.value} mi</Text>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity>
                            <LinearGradient
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}
                                colors={['#71a6f0', '#71a6f0', '#3779d5']}
                                style={styles.continueButtonStyle}
                            >
                                <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                                    Save
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
        marginTop: 20,
        marginHorizontal: 0,
        backgroundColor: '#f4f4f4',
        borderRadius: 50,
        padding: 5,
        alignSelf: 'flex-start'
    },

    input: {
        width: WIDTH - 55,
        height: 50,
        padding: 10,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: '#98b4db',
        fontSize: 22,
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