import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';

export default class settings extends React.Component {
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
                        <View style={{ alignItems: 'center', marginTop: HEIGHT / 35, marginBottom: 20 }}>
                            <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }}>S e t t i n g s</Text>
                        </View>

                        <View style={{ paddingLeft: 20 }}>
                            <Text style={{ color: 'white', fontSize: 30, textAlign: 'left', marginTop: 30, }}>Contact and FAQ</Text>
                            <View>
                                <TouchableOpacity style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'FAQ'}
                                        placeholderTextColor={'#98b4db'}
                                        value={this.state.truth}
                                        onChangeText={(truth) => this.setState({ truth: truth })}
                                        editable={false}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Contact Us'}
                                        placeholderTextColor={'#98b4db'}
                                        value={this.state.truth2}
                                        onChangeText={(truth2) => this.setState({ truth2: truth2 })}
                                        editable={false}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ paddingLeft: 20 }}>
                            <Text style={{ color: 'white', fontSize: 30, textAlign: 'left', marginTop: 30, }}>Legal</Text>
                            <View>
                                <TouchableOpacity style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Terms of Service'}
                                        placeholderTextColor={'#98b4db'}
                                        value={this.state.truth}
                                        onChangeText={(truth) => this.setState({ truth: truth })}
                                        editable={false}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Privacy Policy'}
                                        placeholderTextColor={'#98b4db'}
                                        value={this.state.truth2}
                                        onChangeText={(truth2) => this.setState({ truth2: truth2 })}
                                        editable={false}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginBottom: 20, marginTop: 30 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                                <LinearGradient
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                    colors={['#ffffff', '#ffffff', '#ffffff']}
                                    style={styles.continueButtonStyle}
                                >
                                    <Text style={{ fontSize: 22, color: '#3779d5', alignSelf: 'center' }}>
                                        Log Out
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                                <LinearGradient
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                    colors={['#ffffff', '#ffffff', '#ffffff']}
                                    style={[styles.continueButtonStyle,{width: WIDTH - 135,}]}
                                >
                                    <Text style={{ fontSize: 18, color: '#3779d5', alignSelf: 'center' }}>
                                      Delete Account
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

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