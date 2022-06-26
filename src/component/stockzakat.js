import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

var radio_props = [
    { value: 0, label: 'Male' },
    { value: 1, label: 'Female' },
];
export default class stockzakat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const swipeSetting = {

            autoClose: true,
            onClose: (secId, rowId, direction) => {

            },
            onOpen: (secId, rowId, direction) => {

            },
            right: [
                {
                    onPress: () => {

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index
        }
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <AntDesign
                name='home'
                type='font-awesome'
                size={24}
                style={{ color: tintColor }}
                containerStyle={{ width: width(10) }}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/appbg.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>

                    <ImageBackground source={require('./../image/menubg.png')} style={{ width: '100%', height: '39%' }} resizeMode='stretch'>
                        <View style={{ marginTop: hp('0%'), marginHorizontal: wp('5%'), }}>

                            <View style={{ marginTop: hp('8%') }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                                    <AntDesign name='arrowleft' color='white' size={25} />
                                </TouchableOpacity>
                            </View>

                            <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', marginTop: -25 }}>Stock Zakat</Text>
                        </View>
                    </ImageBackground>

                    <ScrollView style={{ marginTop: wp('-47%') }}>
                        <View style={{ padding: 10 }}>

                            <View style={styles.textinput}>
                                <Picker style={{ height: 30, color: '#B9B9B9', width: 300, }}
                                    selectedValue={this.state.language}
                                    onValueChange={(itemValue) =>
                                        this.setState({ language: itemValue })}>
                                    <Picker.Item label="Choose Stock Type" value="" />
                                    <Picker.Item value="Stock Fixed Zakat" label="Stock Fixed Zakat" />
                                    <Picker.Item value="Purification Profits Zakat" label="Purification Profits Zakat" />
                                    <Picker.Item value="Speculative Shares Zakat" label="Speculative Shares Zakat" />
                                </Picker>
                            </View>

                            <TextInput
                                placeholder={'Company Name'}
                                placeholderTextColor="#B9B9B9"
                                style={styles.textinput}
                                keyboardType={'phone-pad'}
                            />

                            <View style={{ flex: 1, flexDirection: 'row', marginTop: wp('-10%') }}>

                                <View style={{ width: '50%', padding: 20 }}>
                                    <Text style={{ marginTop: 15, fontWeight: 'bold', }}>Zakat Ratio </Text>
                                </View>

                                <View style={{ width: '50%', padding: 20, }}>
                                    <Text style={{ marginTop: 15, textAlign: 'right', fontWeight: 'bold', color: '#23a7d5' }}>0%</Text>
                                </View>

                            </View>

                            <TextInput
                                placeholder={'Number of Shares'}
                                placeholderTextColor="#B9B9B9"
                                style={styles.textinput}
                                keyboardType={'phone-pad'}
                            />

                            <TextInput
                                placeholder={'Value of Profit'}
                                placeholderTextColor="#B9B9B9"
                                style={styles.textinput}
                                keyboardType={'phone-pad'}
                            />

                            <View style={{ flex: 1, flexDirection: 'row', marginTop: wp('-10%') }}>

                                <View style={{ width: '50%', padding: 20 }}>
                                    <Text style={{ marginTop: 15, fontWeight: 'bold', }}>Cleansing Rate</Text>
                                </View>

                                <View style={{ width: '50%', padding: 20, }}>
                                    <Text style={{ marginTop: 15, textAlign: 'right', fontWeight: 'bold', color: '#23a7d5' }}>0%</Text>
                                </View>

                            </View>

                        </View>



                    </ScrollView>

                    <TouchableOpacity style={styles.myButton1}>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>Calculate Zakat Amount</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8',
    },
    myButton1: {
        backgroundColor: '#23a7d5',
        borderRadius: 2,
        padding: 12,
    },
    textinput: {
        backgroundColor: '#fff',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#cecece',
        borderRadius: 3,
        padding: 10,
        height: 50,
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: wp('3%'),
        marginBottom: wp('3%'),
    },

    thumb: {
        backgroundColor: '#fff',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#cecece',
        borderRadius: 3,
        padding: 10,
        margin: 10,
        alignSelf: 'center',
        width: '90%'
    },

    textinput2: {
        backgroundColor: '#fff',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#cecece',
        borderRadius: 3,
        padding: 10,
        margin: 10,
        alignSelf: 'center',
        width: '90%',
        height: 43,
        textAlign: 'center'
    },
    button: {
        width: 200,
        alignSelf: 'center',
        height: 40,
        backgroundColor: '#23a7d5',
        padding: 5,
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        marginTop: 2
    }
});