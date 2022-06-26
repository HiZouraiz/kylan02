import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { width } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class findpeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            Phone: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('./../image/location.png')} style={styles.logo}></Image>
                    <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>Anyone near you?</Text>
                    <Text style={{ textAlign: 'center', color: '#747474', fontSize: 16, marginTop: 10 }}>WE need to know your location in order to{"\n"}show you people nearby.</Text>
                    <Text style={{ textAlign: 'center', color: '#747474', fontSize: 16, marginTop: 5 }}>Increate your chances of a date.</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('home2')} style={styles.Registerbutton}>
                        <Button style={{ marginTop: 5 }}>
                            <Text style={{ color: '#fff' }}>Find people nearby</Text>
                        </Button>
                    </TouchableOpacity>

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
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },

    Registerbutton: {
        backgroundColor: '#f52877',
        padding: 1,
        marginTop: 30,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 50,
        width: '75%',
        height: 50,
    },
});