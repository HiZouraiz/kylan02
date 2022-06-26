import React from 'react';
import { StyleSheet, TextInput, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, AsyncStorage, ActivityIndicator } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { Avatar, Card, IconButton, List, Button, TouchableRipple, } from 'react-native-paper';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as firebase from "firebase";
import { GiftedChat } from 'react-native-gifted-chat';
// import { GiftedChat } from 'react-native-gifted-chat'


export default class message extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    _id: 1,
                    text: 'Charlie',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Josh',
                        avatar: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80', time: '10 min',
                    },
                }, {
                    _id: 1,
                    text: 'Josh',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Charlie',
                        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                    },
                },
            ]
        };
    }

    onSend = messages => {

        // alert(this.state.key)

        const msg = messages[0]
        const date = msg.createdAt
        // const serverdate = firestore.FieldValue.serverTimestamp();

        const mymsg = {
            created_at: date,
            message: msg.text,
            receiver_id: 1,
            sender_id: 2,
            type: 1
        }

    };


    render() {
        return (
            <View style={styles.container}>

                <View style={{ backgroundColor: '#000', height: '4%' }}></View>

                <View style={{ backgroundColor: '#ffffff', borderBottomColor: '#dddddd', borderBottomWidth: 1 }}>
                    <View style={{ marginTop: hp('1%'), marginBottom: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                                <View>
                                    <AntDesign name='arrowleft' color='#000000' size={26} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 60, height: 60, borderRadius: 500, marginTop: 10 }} source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' }} />
                            <Text style={{ color: '#98B4DB', fontSize: 25, marginTop: 10 }}>Josh</Text>
                        </View>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 10, }}>
                                <FontAwesome5 name='video' color='#98B4DB' size={28} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                        name: 'Josh',
                        avatar: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80', time: '10 min',
                    }}
                    showUserAvatar
                />

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
    header: {
        backgroundColor: '#7C0003',
        padding: 20,
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    headerText: {
        color: 'white'
    },
    userList: {
        padding: 8,
        backgroundColor: 'white',
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    country: {
        fontSize: 14
    },
    login: {
        fontSize: 11,
        color: 'gray'
    },
    profile: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 12,
        color: '#7c0003'
    },
    image: {
        width: 55,
        height: 55,
        marginRight: 15,
        borderRadius: 50,
        marginTop: -5
    },
    flag: {
        fontWeight: 'bold',
        width: 23,
        height: 23,
        color: 'white',
        backgroundColor: '#7C0003',
        borderRadius: 50,
        paddingLeft: 7,
        paddingTop: 1,
        marginLeft: wp('30%'),
        marginTop: wp('3%')
    },
    input: {
        marginHorizontal: wp('1%'),
        backgroundColor: '#fff',
        padding: 10,
        width: '80%',
        height: 40,
        borderRadius: 5
    },

});