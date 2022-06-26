import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
import { height } from 'react-native-dimension';

export default class signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./../image/background.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
          <ScrollView>

            <View style={{ alignItems: 'center', marginTop: HEIGHT / 6, marginBottom: 50 }}>
              <Image resizeMode='contain' style={{ width: 150, height: 150 }} source={require('./../image/img/logo.png')} />
            </View>

            <View>
              <Text style={{ color: 'white', fontSize: 45, textAlign: 'center' }}>S u b t l e</Text>
            </View>
          </ScrollView>
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("signup2")}>
              <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                colors={['#71a6f0', '#71a6f0', '#3779d5']}
                style={styles.continueButtonStyle}
              >
                <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('login')}>
              <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 18, margin: 20, fontWeight: 'bold' }}>Already have an account? <Text style={{ color: '#4382DA' }}>Log In</Text></Text>
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