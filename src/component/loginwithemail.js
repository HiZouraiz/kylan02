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
export default class loginwithemail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
      policy: false
    };
  }

  login = () => {

    const { username } = this.state;
    const { password } = this.state;


    if (username == '') {
      alert("Please Enter Your Username");
      return;
    }
    else if (password == '') {
      alert("Please Enter Your Password");
      return;
    }
    else if (this.state.password.length < 6) {
      alert("Please Enter Atleast 6 Digits Password");
      return;
    }
    else {
      console.log('start')
      this.setState({ loading: true })


      fetch(`${URL}/login`, {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: username,
          password: password
        })
      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({ loading: false })

          console.log(responseJson);

          if (responseJson.message == "Invalid Username") {
            alert('Invalid Username');
            return;
          }
          if (responseJson.message == "Invalid Password") {
            alert('Invalid Password');
            return;
          }
          if (responseJson.message == "Please Verify Your Email") {
            this.props.navigation.navigate('verification')
            return;
          }

          // this.setState({ policy: true })

          if (responseJson.message == "login Successfully") {

            let ACCESSTOKEN = `${responseJson.token}`;
            AsyncStorage.setItem('ACCESSTOKEN', ACCESSTOKEN);

            let UID = `${responseJson.profile.id}`;
            AsyncStorage.setItem('UID', UID);

            let USERNAME = `${responseJson.profile.name}`;
            AsyncStorage.setItem('USERNAME', USERNAME);

            let EMAIL = `${responseJson.profile.email}`;
            AsyncStorage.setItem('EMAIL', EMAIL);

            let LOCATION = `${responseJson.profile.location}`;
            AsyncStorage.setItem('LOCATION', LOCATION);

            let USERIMG = `${responseJson.profile.profile_img}`;
            AsyncStorage.setItem('USERIMG', USERIMG);

            this.setState({ loading: false });

            this.props.navigation.navigate('home2');

          }

        })
        .catch((error) => {
         console.log(error)
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
                <Text style={{ alignSelf: 'center', fontSize: 18, color: 'white' }}>Login</Text>
              </View>
            </View>
          </View>


          <ScrollView>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 25, marginTop: 100 }}>LIFE IS SHORT</Text>
              <Text style={{ color: 'white', fontSize: 35 }}>HAVE AN AFFAIR.</Text>
            </View>


            <View style={{ flexDirection: 'row', marginHorizontal: wp('5%'), justifyContent: 'space-between', marginTop: 50 }}>

              <View style={styles.firstInput}>
                <TextInput
                  style={styles.input}
                  placeholder={'Username'}
                  value={this.state.username}
                  onChangeText={username => this.setState({ username })}
                />
              </View>

            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: wp('5%'), justifyContent: 'space-between', marginTop: 20 }}>

              <View style={styles.firstInput}>
                <TextInput
                  style={styles.input}
                  placeholder={'Password'}
                  value={this.state.password}
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                />
              </View>

            </View>

            {this.state.loading == false ? null : this.renderButton()}


            <TouchableOpacity
              style={styles.button}
              onPress={() => this.login()}>
              <Text style={styles.buttonText}>Login</Text>
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
    padding: 10,
    marginBottom: 0,
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 15
  },

});