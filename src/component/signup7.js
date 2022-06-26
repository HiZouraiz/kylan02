import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

export default class signup7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            image2: '',
            image3: '',
            image4: '',
        };
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log(status)
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }
    }

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({
                    image: result.uri,
                });
            }

        } catch (E) {
            console.log(E);
        }
    };
    _pickImage2 = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({
                    image2: result.uri,
                });
            }

        } catch (E) {
            console.log(E);
        }
    };
    _pickImage3 = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({
                    image3: result.uri,
                });
            }

        } catch (E) {
            console.log(E);
        }
    };
    _pickImage4 = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({
                    image4: result.uri,
                });
            }

        } catch (E) {
            console.log(E);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/background.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
                    <ScrollView>
                        <View style={{ alignItems: 'center', marginTop: HEIGHT / 6, marginBottom: 50 }}>
                            <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }}>Upload at least 2 photos</Text>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this._pickImage()} style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 150, width: '80%' }}>
                                        {this.state.image == '' || this.state.image == null ?
                                            <Image style={{ width: 35, height: 35 }} source={require('../image/img/plus.png')} />
                                            :
                                            <Image style={{ alignSelf: 'center', width: '100%', height: 150, borderRadius: 10, }} source={{ uri: this.state.image }} />
                                        }
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={() => this._pickImage2()} style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 150, width: '80%' }}>
                                        {this.state.image2 == '' || this.state.image2 == null ?
                                            <Image style={{ width: 35, height: 35 }} source={require('../image/img/plus.png')} />
                                            :
                                            <Image style={{ alignSelf: 'center', width: '100%', height: 150, borderRadius: 10, }} source={{ uri: this.state.image2 }} />
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                                <TouchableOpacity onPress={() => this._pickImage3()} style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 150, width: '80%' }}>
                                        {this.state.image3 == '' || this.state.image3 == null ?
                                            <Image style={{ width: 35, height: 35 }} source={require('../image/img/plus.png')} />
                                            :
                                            <Image style={{ alignSelf: 'center', width: '100%', height: 150, borderRadius: 10, }} source={{ uri: this.state.image3 }} />
                                        }
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this._pickImage4()} style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#ffffff', borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 150, width: '80%' }}>
                                        {this.state.image4 == '' || this.state.image4 == null ?
                                            <Image style={{ width: 35, height: 35 }} source={require('../image/img/plus.png')} />
                                            :
                                            <Image style={{ alignSelf: 'center', width: '100%', height: 150, borderRadius: 10, }} source={{ uri: this.state.image4 }} />
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("signup8")}>
                            <LinearGradient
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}
                                colors={['#71a6f0', '#71a6f0', '#3779d5']}
                                style={styles.continueButtonStyle}
                            >
                                <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                                    Confirm
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