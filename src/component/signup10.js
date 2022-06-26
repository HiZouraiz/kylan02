import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Picker, FlatList } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
const COLUMNS = 3

export default class signup10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHeight: '',
            height: '',
            interts: [
                { id: 1, intert: 'Golf' },
                { id: 2, intert: 'Tennis' },
                { id: 3, intert: 'Frisbee' },
                { id: 4, intert: 'Cooking' },
                { id: 5, intert: 'Drinking' },
                { id: 6, intert: 'Golf' },
                { id: 7, intert: 'Golf' },
                { id: 8, intert: 'Golf' },
                { id: 9, intert: 'Golf' },
                { id: 10, intert: 'Golf' },
                { id: 11, intert: 'Golf' },
                { id: 12, intert: 'Golf' },
            ],
            SelectedInterest: [],

        };
    }

    onchangeValue = (item) => {

        const { interts } = this.state;
        const newData = interts.map(e => {
            if (e.id == item.id) {
                return {
                    ...e,
                    selected: !e.selected
                }
            }

            return {
                ...e,
                selected: e.selected
            }
        });

        console.log('AAA:', newData);
        this.setState({
            interts: newData
        })


        // const { genders } = this.state;
        // const newData = genders.map(e => {
        //     if (e.id == item.id) {
        //         return {
        //             ...e,
        //             check: !e.selected
        //         }
        //     }

        //     return {
        //         ...e,
        //         check: e.selected
        //     }
        // });


        // const findGender = newData.filter((card) => card.check == true)
        // console.log(newData)
        // this.setState({
        //     genders: newData,
        //     SelectedGender: findGender
        // })

    }


    Gender() {
        const renderItem = ({ item }) => (
            <TouchableOpacity onPress={() => this.onchangeValue(item)} style={{ backgroundColor: item.selected == true ? '#4584DB' : '#ffffff', borderRadius: 500, padding: 10, marginRight: 10, marginTop: 20 }}>
                <View style={{ marginHorizontal: 12 }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 20 }}>{item.intert}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
        return (
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={this.state.interts}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    numColumns={COLUMNS}
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
                            <Text style={{ color: 'white', fontSize: 38, textAlign: 'center' }}>Interests</Text>
                            <Text style={{ color: 'white', fontSize: 20, marginRight: 10, alignSelf: 'flex-start', marginTop: 10 }}>Select at least 5 interests:</Text>
                        </View>

                        <View>
                            {this.Gender()}
                        </View>

                    </ScrollView>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("signup11")}>
                            <LinearGradient
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 0 }}
                                colors={['#71a6f0', '#71a6f0', '#3779d5']}
                                style={styles.continueButtonStyle}
                            >
                                <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                                    Next
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