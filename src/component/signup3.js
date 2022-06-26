import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
import { height } from 'react-native-dimension';

export default class signup3 extends React.Component {
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
            <View style={{ alignItems: 'center', marginTop: HEIGHT / 4, marginBottom: 100 }}>
              <Text style={{ color: 'white', fontSize: 35, textAlign: 'center' }}>What’s your school email? </Text>
            </View>

            <View>
              <View style={styles.firstInput}>
                <TextInput
                  style={styles.input}
                  placeholder={'subtle@school.edu'}
                  placeholderTextColor={'#98b4db'}
                  value={this.state.number}
                  onChangeText={number => this.setState({ number })}
                  keyboardType={'email-address'}

                />
              </View>
            </View>
          </ScrollView>
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("emailverification")}>
              <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                colors={['#71a6f0', '#71a6f0', '#3779d5']}
                style={styles.continueButtonStyle}
              >
                <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                  Next
                </Text>
              </LinearGradient>
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