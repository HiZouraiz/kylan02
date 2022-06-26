import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';


export default class myProfile extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }




    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>

                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#98d4bd', marginTop: 20 }}>P r o f i l e</Text>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 50 }}>
                    <Image style={{ width: 150, height: 150, borderRadius: 500 }} source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' }} />
                    <Text style={{ fontSize: 40, marginTop: 20 }}>Alex, 27</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('editProfile')}>
                        <LinearGradient
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            colors={['#71a6f0', '#71a6f0', '#3779d5']}
                            style={styles.continueButtonStyle}
                        >
                            <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                                Edit Profile
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('settings')}>
                        <LinearGradient
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            colors={['#71a6f0', '#71a6f0', '#3779d5']}
                            style={styles.continueButtonStyle}
                        >
                            <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                                Settings
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('homeLocation')}>
                        <LinearGradient
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            colors={['#71a6f0', '#71a6f0', '#3779d5']}
                            style={styles.continueButtonStyle}
                        >
                            <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                                Home Location
                            </Text>
                        </LinearGradient>
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
    continueButtonStyle: {
        borderRadius: 500,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: 55.0,
        marginBottom: 0,
        width: WIDTH - 120,
    },
});