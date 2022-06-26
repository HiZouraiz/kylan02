import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { URL } from './../route/base_url';
import SwipeButton from 'rn-swipe-button';

var radio_props = [
    { value: 0, label: 'Male' },
    { value: 1, label: 'Female' },
];
export default class userprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Sliderimages: [
                { id: 2, IMG: require('./../image/2.jpg') },
                { id: 3, IMG: require('./../image/3.jpg') },
                { id: 4, IMG: require('./../image/4.jpg') },
                { id: 5, IMG: require('./../image/5.jpg') },
            ],
            Categories: [
                { id: 1, Name: 'Music' },
                { id: 2, Name: 'Photography' },
                { id: 3, Name: 'Travel' }
            ],
            Profile: [{ id: 1 }],
            interts: [
                { id: 1, interest: 'Cooking' },
                { id: 2, interest: 'Skiing' },
                { id: 3, interest: 'Rock' },
                { id: 4, interest: 'Festivals' },
                { id: 5, interest: 'Coding' },
                { id: 6, interest: 'Piano' },
            ],

        };
    }


    renderImages = ({ item }) => {
        return (
            <View>

                <ImageBackground borderBottomRightRadius={20} borderBottomLeftRadius={20} source={item.IMG} style={styles.ads} >
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={['black', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)',]}
                        style={{ flex: 1, borderRadius: 20, }}
                    >
                        <View style={{ marginLeft: wp('5%'), width: 50, marginTop: 17, alignSelf: 'flex-end' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                                <FontAwesome5 style={{ marginRight: 20 }} name='times' color='#ffffff' size={40} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 20, paddingTop: 190 }}>
                            <Text numberOfLines={1} style={{ color: '#ffffff', fontSize: 35 }}>Kylan, 20</Text>
                            <Text numberOfLines={1} style={{ color: '#ffffff', fontSize: 18 }}>Santa Barbara City College</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>

            </View>
        )
    }

    renderCategories = ({ item }) => {
        return (

            <TouchableOpacity style={{ padding: 10 }}>
                <Text style={{ fontSize: 16, backgroundColor: '#dddddd', color: '#000000', padding: 10, borderRadius: 50 }}>
                    {item.Name}
                </Text>
            </TouchableOpacity>

        )
    }

    Interts() {
        const renderItem = ({ item }) => (
            <View style={{ backgroundColor: '#4584DB', borderRadius: 500, padding: 10, margin: 10 }}>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 20, color: '#ffffff' }}>{item.interest}</Text>
                    </View>
                </View>
            </View>
        )
        return (
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={this.state.interts}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    numColumns={3}
                />
            </View>
        )
    }

    renderProfile = ({ item }) => {
        // var date = item.dob
        // var today = new Date();
        // var birthDate = new Date(date);
        // var age = today.getFullYear() - birthDate.getFullYear();
        return (
            <View style={{ padding: 20 }}>
                <Text style={{ color: '#ffffff', fontSize: 30, marginBottom: 20 }}>About me</Text>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome5 style={{ marginRight: 20 }} name='home' color='#000000' size={25} />
                        <Text style={{ color: '#ffffff', fontSize: 20 }}>Santa Barbara, CA</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <FontAwesome5 style={{ marginRight: 20 }} name='ruler' color='#000000' size={25} />
                        <Text style={{ color: '#ffffff', fontSize: 20 }}>6'6"</Text>
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: '#ffffff', fontSize: 30, marginBottom: 10 }}>Two Truths One Lie:</Text>

                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ color: '#ffffff', fontSize: 20, marginTop: 5 }}>I surf</Text>
                        <Text style={{ color: '#ffffff', fontSize: 20, marginTop: 5 }}>I am building a dating app</Text>
                        <Text style={{ color: '#ffffff', fontSize: 20, marginTop: 5 }}>I’m best friends with Harry Styles</Text>
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: '#ffffff', fontSize: 30, marginBottom: 10 }}>Interests</Text>

                    <View style={{ paddingLeft: 20, }}>
                        {this.Interts()}
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>

                    <SwipeButton
                        title="Drag to Invite"
                        railBackgroundColor="#ffffff"
                        railBorderColor="#ffffff"
                        railFillBackgroundColor="#74A1E0"
                        railFillBorderColor="#74A1E0"
                        thumbIconBackgroundColor='#2E83FA'
                        thumbIconBorderColor="#2E83FA"
                        // onSwipeSuccess={() =>
                        //     alert('hi')
                        // }
                    />

                </View>
            </View>
        )
    }



    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/background.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
                    <ScrollView>
                        <View>

                            <FlatList
                                pagingEnabled
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={this.state.Sliderimages}
                                renderItem={this.renderImages}
                                keyExtractor={item => item.id}
                            />

                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={this.state.Profile}
                                renderItem={this.renderProfile}
                                keyExtractor={item => item.id}
                            />

                        </View>


                    </ScrollView>
                </ImageBackground>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    card: {
        width: '100%',
        height: wp('32%'),
        marginTop: 25,
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    card2: {
        backgroundColor: '#23a7d5',
        width: wp('30%'),
        height: '95%',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        alignSelf: 'center'
    },
    icon: {
        width: 70,
        height: 80,
        alignSelf: 'center',
        marginTop: 10,
    },
    icontext: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    cardtext: {
        width: '100%',
        height: wp('0%'),
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    ads: {
        width: WIDTH,
        height: 350,
        alignSelf: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
});