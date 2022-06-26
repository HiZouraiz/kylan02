import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { URL } from './../route/base_url';

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
            Profile: [],
            id:'',
            name:'',
            img:'',
        };
    }

    renderProfile = ({ item }) => {
        var date = item.dob
        var today = new Date();
        var birthDate = new Date(date);
        var age = today.getFullYear() - birthDate.getFullYear();
        return (
            <View>
                <View style={{ padding: 20, backgroundColor: '#ffffff' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
                    <Text style={{ fontSize: 15, marginTop: 10 }}>{age} years old, in {item.location}</Text>
                </View>

                <Text style={{ fontSize: 16, padding: 20, paddingLeft: 25 }}>Photos</Text>
                <View style={{ padding: 20, flexDirection: 'row', paddingTop: 0 }}>
                    <Image source={require('./../image/2.jpg')} style={{ width: 100, height: 100, borderRadius: 20, marginRight: 10 }} />
                    <Image source={require('./../image/3.jpg')} style={{ width: 100, height: 100, borderRadius: 20, marginRight: 10 }} />
                    <Image source={require('./../image/4.jpg')} style={{ width: 100, height: 100, borderRadius: 20, marginRight: 10 }} />
                </View>

                <Text style={{ fontSize: 16, padding: 20, paddingLeft: 25, paddingBottom: 0 }}>About Me</Text>
                <View style={{ padding: 20, paddingTop: 0, paddingLeft: 25 }}>
                    <Text style={{ fontSize: 17, marginTop: 10, color: '#a1a2a4' }}>{item.greeting}</Text>
                </View>

                <Text style={{ fontSize: 16, padding: 20, paddingLeft: 25, paddingBottom: 0, marginBottom: 10 }}>VITALS</Text>
                <View style={{ padding: 20, paddingTop: 0, paddingLeft: 25 }}>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('./../image/ring.png')} style={{ width: 20, height: 20, marginRight: 25, marginTop: 2 }} />
                        <Text style={{ fontSize: 14, color: '#a1a2a4' }}>{item.relationshipstatus}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('./../image/cake.png')} style={{ width: 20, height: 20, marginRight: 25, marginTop: 2 }} />
                        <Text style={{ fontSize: 14, color: '#a1a2a4' }}>{age}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('./../image/ruler.png')} style={{ width: 20, height: 20, marginRight: 25, marginTop: 2 }} />
                        <Text style={{ fontSize: 14, color: '#a1a2a4' }}>{item.height}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('./../image/weight.png')} style={{ width: 20, height: 20, marginRight: 25, marginTop: 2 }} />
                        <Text style={{ fontSize: 14, color: '#a1a2a4' }}>{item.weight}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('./../image/user.png')} style={{ width: 20, height: 20, marginRight: 25, marginTop: 2 }} />
                        <Text style={{ fontSize: 14, color: '#a1a2a4' }}>{item.bodytype}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('./../image/like.png')} style={{ width: 20, height: 20, marginRight: 25, marginTop: 2 }} />
                        <Text style={{ fontSize: 14, color: '#a1a2a4' }}>{item.limits}</Text>
                    </View>

                </View>
            </View>
        )
    }

    componentDidMount() {
        this.getProfile();
    }

    getProfile = async () => {

        const TOKEN = await AsyncStorage.getItem('ACCESSTOKEN');
        const UID = this.props.navigation.getParam('ID');

        fetch(`${URL}users/${UID}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
        }).then(r => r.json())
            .then(response => {
                console.log(response)

                this.setState({
                    Profile: response.profile,
                    id: response.profile[0].id,
                    name: response.profile[0].name,
                    img: response.profile[0].profile_img,
                })
            })
            .catch(e => console.log(e));
    }

    renderImages = ({ item }) => {
        return (
            <View>
                <Image style={styles.ads} source={{ uri: item.profile_img }} />
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

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ height: '8%', backgroundColor: '#f52877', shadowColor: "#000" }}>

                    <View style={{ marginLeft: wp('5%'), marginTop: 17 }}>
                        <AntDesign name='arrowleft' color='#ffffff' size={25}
                            onPress={
                                () => this.props.navigation.goBack(null)
                            } />
                    </View>

                </View>

                <ScrollView>
                    <View>
                        <FlatList
                            pagingEnabled
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.Profile}
                            renderItem={this.renderImages}
                            keyExtractor={item => item.id}
                        />

                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={this.state.Profile}
                            renderItem={this.renderProfile}
                            keyExtractor={item => item.id}
                        />



                        <Text style={{ fontSize: 16, padding: 20, paddingLeft: 25, paddingBottom: 0 }}>INTERESTS & DESIRES</Text>
                        <View style={{ padding: 20, paddingTop: 0, paddingLeft: 25 }}>
                            <View>
                                <ScrollView horizontal>
                                    <FlatList
                                        pagingEnabled
                                        horizontal
                                        data={this.state.Categories}
                                        renderItem={this.renderCategories}
                                        keyExtractor={item => item.id}
                                    />
                                </ScrollView>
                            </View>
                        </View>


                    </View>


                </ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('message', {USERID: this.state.id, USERNAME: this.state.name, USERIMG: this.state.img})} style={{ backgroundColor: '#f52877' }}>
                    <Text style={{ alignSelf: 'center', color: 'white', padding: 15, fontSize: 16 }}>Message Me</Text>
                </TouchableOpacity>

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
    },
});