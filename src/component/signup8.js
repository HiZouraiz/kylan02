import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Picker, FlatList } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';

export default class signup8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHeight: '',
            height: '',
            genders: [
                { id: 1, gender: 'Male' },
                { id: 2, gender: 'Female' },
                { id: 3, gender: 'Other' },
            ],
            SelectedGender: [],
            interts: [
                { id: 1, interest: 'Women' },
                { id: 2, interest: 'Men' },
                { id: 3, interest: 'Everyone' },
            ],
            SelectedInterest: [],
        };
    }

    onchangeValue = (item) => {

        const { genders } = this.state;
        const newData = genders.map(e => {
            if (e.id == item.id) {
                return {
                    ...e,
                    check: !e.selected
                }
            }

            return {
                ...e,
                check: e.selected
            }
        });


        const findGender = newData.filter((card) => card.check == true)
        console.log(newData)
        this.setState({
            genders: newData,
            SelectedGender: findGender
        })

    }


    Gender() {
        const renderItem = ({ item }) => (
            <TouchableOpacity onPress={() => this.onchangeValue(item)} style={{ backgroundColor: item.check == true ? '#4584DB' : '#ffffff', borderRadius: 500, padding: 10, marginRight: 10 }}>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 20 }}>{item.gender}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
        return (
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    horizontal
                    data={this.state.genders}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    onchangeValueInterest = (item) => {

        const { interts } = this.state;
        const newData = interts.map(e => {
            if (e.id == item.id) {
                return {
                    ...e,
                    check: !e.selected
                }
            }

            return {
                ...e,
                check: e.selected
            }
        });


        const findInterest = newData.filter((card) => card.check == true)
        console.log(newData)
        this.setState({
            interts: newData,
            SelectedInterest: findInterest
        })

    }

    Interts() {
        const renderItem = ({ item }) => (
            <TouchableOpacity onPress={() => this.onchangeValueInterest(item)} style={{ backgroundColor: item.check == true ? '#4584DB' : '#ffffff', borderRadius: 500, padding: 10, marginRight: 10 }}>
                <View style={{ marginHorizontal: 12 }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 20 }}>{item.interest}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
        return (
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    horizontal
                    data={this.state.interts}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/background.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
                    <ScrollView style={{ padding: 10 }}>
                        <View style={{ alignItems: 'center', marginTop: HEIGHT / 10, marginBottom: 50 }}>
                            <Text style={{ color: 'white', fontSize: 38, textAlign: 'center' }}>What is your height?</Text>
                        </View>

                        <View>
                            <View style={styles.firstInput}>
                                <Picker
                                    style={styles.input}
                                    selectedValue={this.state.selectedHeight}
                                    onValueChange={(height) => this.setState({ height: height })}>
                                    <Picker.Item label="Select Your Height" value="" />
                                    <Picker.Item label="4.0" value="4.0" />
                                    <Picker.Item label="4.1" value="4.1" />
                                    <Picker.Item label="4.2" value="4.2" />
                                    <Picker.Item label="4.3" value="4.3" />
                                    <Picker.Item label="4.4" value="4.4" />
                                    <Picker.Item label="4.5" value="4.5" />
                                    <Picker.Item label="4.6" value="4.6" />
                                    <Picker.Item label="4.7" value="4.7" />
                                    <Picker.Item label="4.8" value="4.8" />
                                    <Picker.Item label="4.9" value="4.9" />
                                    <Picker.Item label="5.0" value="5.0" />
                                    <Picker.Item label="5.1" value="5.1" />
                                    <Picker.Item label="5.2" value="5.2" />
                                    <Picker.Item label="5.3" value="5.3" />
                                    <Picker.Item label="5.4" value="5.4" />
                                    <Picker.Item label="5.5" value="5.5" />
                                    <Picker.Item label="5.6" value="5.6" />
                                    <Picker.Item label="5.7" value="5.7" />
                                    <Picker.Item label="5.8" value="5.8" />
                                    <Picker.Item label="5.9" value="5.9" />
                                    <Picker.Item label="6.0" value="6.0" />
                                    <Picker.Item label="6.1" value="6.1" />
                                    <Picker.Item label="6.2" value="6.2" />
                                    <Picker.Item label="6.3" value="6.3" />
                                    <Picker.Item label="6.4" value="6.4" />
                                    <Picker.Item label="6.5" value="6.5" />
                                    <Picker.Item label="6.6" value="6.6" />
                                    <Picker.Item label="6.7" value="6.7" />
                                    <Picker.Item label="6.8" value="6.8" />
                                    <Picker.Item label="6.9" value="6.9" />
                                    <Picker.Item label="7.0" value="7.0" />
                                </Picker>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: HEIGHT / 18, marginBottom: 20 }}>
                            <Text style={{ color: 'white', fontSize: 38, textAlign: 'center' }}>What is your gender?</Text>
                        </View>

                        <View>
                            {this.Gender()}
                        </View>

                        <View style={{ alignItems: 'center', marginTop: HEIGHT / 20, marginBottom: 20 }}>
                            <Text style={{ color: 'white', fontSize: 38, textAlign: 'center' }}>Who are you interested in?</Text>
                        </View>

                        <View>
                            {this.Interts()}
                        </View>

                    </ScrollView>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("signup9")}>
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