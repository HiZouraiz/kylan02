import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

export default class signup5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseDateFrom: '',
            AGE: ''
        };
    }

    handlePickerFrom = (datetime) => {

        var date = datetime
        var today = new Date();
        var birthDate = new Date(date);
        var age = today.getFullYear() - birthDate.getFullYear();

        this.setState({
            isVisibleFrom: false,
            chooseDateFrom: moment(datetime).format('L'),
            AGE: age
        })
    };

    hidePickerFrom = () => {
        this.setState({
            isVisibleFrom: false,
        })
    };

    showPickerFrom = () => {
        this.setState({
            isVisibleFrom: true,
        })
    };

    render() {

        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/background.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
                    <ScrollView>
                        <View style={{ alignItems: 'center', marginTop: HEIGHT / 6, marginBottom: 100 }}>
                            <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }}>What is your birthday?</Text>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', marginTop: 15 }}>You can’t change this later</Text>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => this.showPickerFrom()}>
                                <View style={styles.firstInput}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={`Select Date Of Birth`}
                                        placeholderTextColor={'#98b4db'}
                                        value={this.state.chooseDateFrom}
                                        keyboardType={'phone-pad'}
                                        maxLength={11}
                                        editable={false}
                                    />
                                </View>
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={this.state.isVisibleFrom}
                                onConfirm={this.handlePickerFrom}
                                onCancel={this.hidePickerFrom}
                                mode={'date'}
                                datePickerModeAndroid={'spinner'}
                            />
                        </View>

                        {this.state.AGE == '' ? null :
                            <Text style={{ color: 'white', fontSize: 30, textAlign: 'center', marginTop: 15 }}>Age {this.state.AGE}</Text>
                        }

                    </ScrollView>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("signup6")}>
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