import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Picker, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple, ProgressBar } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

var radio_props = [
    { value: 0, label: 'Male' },
    { value: 1, label: 'Female' },
];
export default class subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FIRST: '',
            gender: '',
            UID: '',
        };
    }

    componentDidMount = async () => {
        this.setState({
            UID: await AsyncStorage.getItem('ID'),
        });
    }

    next() {
        const { gender } = this.state;
        if (gender == "") {
            alert('PLEASE SELECT YOUR GENDER');
            return;
        }
        this.props.navigation.navigate('signup3', { FIRST: this.state.FIRST, GENDER: this.state.gender })
    }


    uploaddata = (TYPE) => {

        const { UID } = this.state;

        if (this.state.TYPE == '') {
            alert("Please Select Your Package");
            return;
        }
        else {
            this.setState({ loading: true })
            fetch('https://www.airbornepassion.com/api/user/update_package', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: UID,
                    package: TYPE,
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ loading: false })

                    console.log(responseJson)
                    if (responseJson.message == 'Package Update successfully') {
                        alert('Your Package Update Successfully');
                        this.props.navigation.goBack(null)
                        return;
                    }

                })

        }


    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ScrollView>
                    <KeyboardAvoidingView behavior="padding">

                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: "center", padding: 20, marginTop: -5 }}>VEIBES</Text>

                        <View style={{ marginTop: -10, marginBottom: 10, backgroundColor: 'white' }}>
                            <Text style={{ color: '#f2552c', fontSize: 18, textAlign: "center" }}>PREMIUM</Text>
                        </View>

                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: "center", padding: 20, marginTop: -10 }}>More attention for you</Text>
                        <Text style={{ color: '#fff', fontSize: 15, textAlign: "center", marginTop: -15, marginBottom: 10 }}>2x more likes and glances due to higher visibility</Text>

                        <View style={{ width: "100%", marginTop: 10 }}>

                            <TouchableOpacity style={{ margin: 10, backgroundColor: 'white', borderRadius: 5, padding: 20 }}>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 20, marginBottom: 10 }}>THE BEST DEAL</Text>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 15, textAlign: 'center', marginTop: 0 }}>12 Months</Text>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 15, textAlign: 'center', marginTop: 0 }}>$5.83 per month</Text>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 15, textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Save 55%</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ margin: 10, backgroundColor: 'white', borderRadius: 5, padding: 20 }}>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 20, marginBottom: 10 }}>THE BEST DEAL</Text>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 15, textAlign: 'center', marginTop: 0 }}>12 Months</Text>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 15, textAlign: 'center', marginTop: 0 }}>$5.83 per month</Text>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 15, textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Save 55%</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ margin: 10, backgroundColor: 'white', borderRadius: 5, padding: 20 }}>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 20, marginBottom: 10 }}>THE BEST DEAL</Text>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 15, textAlign: 'center', marginTop: 0 }}>12 Months</Text>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 15, textAlign: 'center', marginTop: 0 }}>$5.83 per month</Text>
                                <Text style={{ alignSelf: "center", color: 'black', fontSize: 15, textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Save 55%</Text>
                            </TouchableOpacity>

                        </View>

                    </KeyboardAvoidingView>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2552c',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerText: {
        marginLeft: wp('5%'),
        marginTop: wp('10%'),
        fontSize: hp('5%'),
        fontWeight: 'bold',
        color: '#5f5d70'
    },
    input: {
        backgroundColor: '#fff',
        width: '82%',
        alignSelf: 'center',
    },
    input1: {
        marginTop: wp('4%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#fff'
    },
    button: {
        marginTop: hp('7%'),
        alignItems: 'center',
        backgroundColor: '#EB3007',
        borderRadius: wp('50%'),
        height: 50,
        marginHorizontal: wp('10%'),
    },
    buttonText: {

        fontSize: 20,
        color: '#fff',
        marginTop: hp('1.5%'),
    },
    signupView: {
        alignItems: 'center',
        marginTop: hp('5%'),
        marginBottom: hp('5%')
    },
    alresdy: {
        fontSize: hp('2.5%'),
        color: '#666666'
    },
    signupText: {
        fontSize: hp('2.5%'),
        marginTop: hp('1%'),
        color: '#00cb9c',
        fontWeight: 'bold'
    },
    location: {
        position: 'absolute',
        marginLeft: wp('80%'),
        marginTop: hp('77.5%')
    },
    radioButton: {
        marginRight: 30,
        marginTop: 10
    },
    mainRadioView: {
        marginLeft: wp('5%'),
        marginTop: hp('3%')
    },
    choose: {
        fontSize: 15,
        color: '#666666'
    },

    button: {
        marginTop: 25,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: 'white',
        height: 40
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        padding: 10
    },

});