import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, Modal, ActivityIndicator, AsyncStorage } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import { URL } from './../route/base_url';


var radio_props = [
    { value: 0, label: 'Male' },
    { value: 1, label: 'Female' },
];
export default class verifyEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            password: '',
            loading: false,
            policy: false
        };
    }

    Verify = () => {

        const { otp } = this.state;
        const email = this.props.navigation.getParam('EMAIL')
        


        if (otp == '') {
            alert("Please Enter Your 6 Digits OTP Code");
            return;
        }
        else {
            console.log('start')
            this.setState({ loading: true })


            fetch(`${URL}verifyEmail`, {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    code: otp
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.setState({ loading: false })

                    console.log(responseJson);

                    if(responseJson.message == "Invalid OTP Code")
                    {
                        alert('Invalid OTP Code!');
                        return;
                    }
                    if(responseJson.message == "Your Email is Successfully Verified")
                    {
                        alert('Your Email Has Been Successfully Verified. \n\n Please Log In To Your Account ');
                        this.props.navigation.navigate('loginwithemail');
                        return;
                    }

                    // if(responseJson.status == 200)
                    // {
                    //     this.props.navigation.navigate('forgotPassword', {EMAIL: email})
                    // }

                })
                .catch((error) => {
                    alert(error);
                });

        }
    }

    renderButton() {
        if (this.state.loading) {
            <View>
            </View>
        }
        return (
            <View style={{ marginTop: 20, marginBottom: -20 }}>
                <ActivityIndicator color="#f52877" size={'large'} animating={this.state.loading} />
            </View>
        )
    };

    next() {
        this.setState({ policy: false });
        this.props.navigation.navigate('findpeople');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ImageBackground source={require('./../image/loginbg.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={styles.taskbar}>
                        <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={{ width: '10%' }}>
                                <AntDesign name='arrowleft' color='#fff' size={20} />
                            </TouchableOpacity>
                            <View style={{ width: '75%', marginTop: -1 }}>
                                <Text style={{ alignSelf: 'center', fontSize: 18, color: 'white' }}>Email Verification</Text>
                            </View>
                        </View>
                    </View>


                    <ScrollView>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 30, marginTop: 100 }}>VERIFY YOUR EMAIL</Text>
                            <Text style={{ color: 'white', fontSize: 18, marginTop:10 }}>Please Enter OTP 6 Digits Code</Text>
                        </View>


                        <View style={{ flexDirection: 'row', marginHorizontal: wp('5%'), justifyContent: 'space-between', marginTop: 50 }}>

                            <View style={styles.firstInput}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'OTP'}
                                    value={this.state.otp}
                                    keyboardType={'phone-pad'}
                                    maxLength={6}
                                    onChangeText={otp => this.setState({ otp })}
                                />
                            </View>

                        </View>


                        {this.state.loading == false ? null : this.renderButton()}


                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.Verify()}>
                            <Text style={styles.buttonText}>Verify</Text>
                        </TouchableOpacity>

                    </ScrollView>

                    <Modal visible={this.state.policy}>
                        <View>
                            <ScrollView>

                                <View style={{ padding: 20 }}>

                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Privacy and Advertising</Text>
                                    <Text style={{ fontSize: 15, marginTop: 10 }}>
                                        Do you only want to see ads that are relevant for you?{"\n"}{"\n"}

                                        Upon providing your consent, you will be shown
                                        personalized content from our advertising
                                        partners, including Veibes(a subsidiary
                                        of Twitter), Veibes partners and OpenX.
                                        Depending on your device and app settings,
                                        the ad partners will then process your personal
                                        data, including your device and ad IDs, device
                                        information, your approximate shared location,
                                        your profile information and other demographic
  and other data related to your interests.{"\n"}{"\n"}

                                        Because your privacy is important to us, we will
                                        never share your e-mail address, your username,
  of your profile image.{"\n"}{"\n"}

                                        This data will be processed in accordance with
                                        the respective privacy policy of Veibes, the
  individual advertising partner and us.{"\n"}{"\n"}

                                        By clicking on OK, you confirm that you are above
                                        16 years of age and that you consent to the
                                        processing and sharing of your data for the
                                        displaying of personalized ads. You can object to
                                        this at any time via your device and app settings.
                </Text>

                                    <View style={{ marginTop: 30 }}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={() => this.next()}>
                                            <Text style={styles.buttonText}>Okay</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => this.setState({ policy: false })} style={{ marginTop: 20 }}>
                                            <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </ScrollView>
                        </View>
                    </Modal>
                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        textAlign:'center'
    },
    input1: {
        marginTop: wp('4%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#fff'
    },
    button: {
        marginTop: hp('5%'),
        alignItems: 'center',
        backgroundColor: '#f52877',
        borderRadius: wp('50%'),
        height: 50,
        marginHorizontal: wp('8%'),
        marginLeft: 20
    },
    buttonText: {

        fontSize: 18,
        color: '#fff',
        marginTop: hp('2%'),
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
    date: {
        width: wp('90%'),
        backgroundColor: '#fff',
    },
    taskbar: {
        height: 60,
        backgroundColor: '#f52877',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },


    firstInput: {
        flexDirection: 'row',
        marginTop: 0,
        marginHorizontal: 0,
        backgroundColor: '#f4f4f4',
        borderRadius: 50,
        padding: 5
    },

    input: {
        width: WIDTH - 55,
        height: 40,
        padding: 0,
        marginBottom: 0,
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: 20,
        textAlign:'center'
    },

});