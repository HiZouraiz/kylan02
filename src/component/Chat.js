import React from 'react';
import { StyleSheet, Picker, Text, View, Dimensions, TouchableOpacity, Image, ActivityIndicator, Modal, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


export default class Chat extends React.Component {
    constructor() {
        super()
        this.state = {
            region: null,
            loading: false,
            isSwitchOn: false,
            filter: false,
            marginBottom: 0,
            invites: [
                { id: 1, name: 'Charlie', msg: 'H e y y : )', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', time: '5 min' },
                { id: 2, name: 'Josh', msg: 'H e y ! W a n n a m e e t u p a t . . .', image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80', time: '10 min' }
            ],
            SelectedInterest: [],
            fromValue: '',
            toValue: '',
            value: ''
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


    header() {
        return (
            <View style={{ height: 70, backgroundColor: '#ffffff', }}>
                <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>

                    <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>

                    </View>

                    <View style={{ width: '55%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#98d4bd' }}>M e s s a g e s</Text>
                    </View>

                    <View style={{ width: '20%', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: -10 }} onPress={() => this.setState({ filter: true })}>
                            <FontAwesome5 name='sliders-h' color='#000000' size={28} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }


    invites() {
        const renderItem = ({ item }) => (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("message")} style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ width: '20%' }}>
                    <Image style={{ width: 75, height: 75, borderRadius: 20 }} source={{ uri: item.image }} />
                </View>
                <View style={{ width: '60%', paddingLeft: 15, justifyContent:'center' }}>
                    <Text numberOfLines={1} style={{ fontSize: 20 }}>{item.name}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 16 }}>{item.msg}</Text>
                </View>
                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#6C6C6C' }}>{item.time}</Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={this.state.invites}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }


    render() {
        const { region } = this.state;
        return (

            <View style={{ flex: 1, backgroundColor: '#ffffff', }}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>

                {this.header()}

                <View style={{ marginTop: 20 }}>
                    {this.invites()}
                </View>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        height: '100%'
    },
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

});