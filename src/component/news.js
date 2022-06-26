import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, ActivityIndicator, PanResponder, AsyncStorage, Alert, Modal } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { ScrollView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome5, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { URL } from './../route/base_url';
const numColumns = 2;

export default class news extends React.Component {
  constructor() {
    super()
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      Users: [
        { id: 1, IMG: require('./../image/1.jpg'), Name: 'Ahmmed, 20', Area: '1.7 mi (Islamabad)' },
        { id: 2, IMG: require('./../image/2.jpg'), Name: 'Ali, 26', Area: '7.1 mi (Lahore)' },
        { id: 3, IMG: require('./../image/3.jpg'), Name: 'Raza, 22', Area: '2.1 mi (Karachi)' },
        { id: 4, IMG: require('./../image/4.jpg'), Name: 'Usman, 27', Area: '4.5 mi (Multan)' },
        { id: 5, IMG: require('./../image/5.jpg'), Name: 'Fahad, 30', Area: '8.3 mi (Sahiwal)' },
        { id: 6, IMG: require('./../image/6.jpg'), Name: 'Mudassar, 29', Area: '5.9 mi (Rawalpindi)' },
      ],
      Profiles: [],
      loading: false,
      test: ''
    }
  }

  forceUpdateHandler() {
    this.forceUpdate();
  };

  componentDidMount() {

    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.getUsers();
    });

    this.getUsers();
  }

  getUsers = async () => {

    const TOKEN = await AsyncStorage.getItem('ACCESSTOKEN');
    const UID = await AsyncStorage.getItem('UID');

    // this.setState({ loading: true })

    fetch(`${URL}getlikes`, {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        userid: UID
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        // this.setState({ loading: false })

        // console.log(responseJson);

        if (responseJson.message == "success") {
          this.setState({
            Profiles: responseJson.profiles
          })
        }


      })
      .catch((error) => {
        console.log(error)
      });
  }

  deleteLike = async (id) => {

    const TOKEN = await AsyncStorage.getItem('ACCESSTOKEN');
    const UID = await AsyncStorage.getItem('UID');

    // console.log('USER ID: ' + UID, 'PROFILE ID: ' + id);
    // return;

    fetch(`${URL}deletelike`, {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        userid: UID,
        profileid: id,
      })
    }).then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);

        // this.getUsers();

        if (responseJson.message == "success") {

          this.setState({ test: 'hello' })
          this.getUsers();

        }
        if (responseJson.status == 404) {

          this.setState({ test: 'hello' })

        }


      })
      .catch((error) => {
        console.log(error)
      });
  }

  renderUsers = ({ item }) => {


    var date = item.profile_dob
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();

    return (

      <View style={{ width: '50%', height: '50%', padding: 5, marginTop: 5, backgroundColor: '#ffffff' }}>
        <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{ width: '100%', marginRight: 0 }} onPress={() => this.props.navigation.navigate('userprofile', { ID: item.profileid })}>
            <View>
              <TouchableOpacity onPress={() => this.deleteLike(item.profileid)} style={{ zIndex: 1000 }}>
                <Image source={require('./../image/icon/cross.png')} style={{ width: 28, height: 28, marginBottom: -15, marginRight: -5, zIndex: 1000, alignSelf: 'flex-end' }} />
              </TouchableOpacity>
              <Image source={{ uri: item.profile_img }} style={{ width: '100%', height: 160, borderRadius: 20, resizeMode: 'stretch' }} />
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 16, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>{item.profile_name}, {age}</Text>
              <Text style={{ fontSize: 15, paddingLeft: 10, paddingRight: 5, paddingBottom: 10, paddingTop: 5, fontSize: 12, color: '#747474' }}>{item.profile_location}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )

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

  render() {
    return (
      <View style={{ flex: 1 }}></View>
      // <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      //   <View style={{ backgroundColor: '#000', height: '4%' }}></View>

      //   <View style={{ height: 60, backgroundColor: '#f52877' }}>
      //     <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>

      //       <View style={{ width: '20%' }}>
      //         <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.setState({ filter: true })}>
      //           <FontAwesome5 name='user' color='#ffffff' size={20} />
      //         </TouchableOpacity>
      //       </View>

      //       <View style={{ width: '55%' }}>
      //         <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#ffffff' }}>Likes</Text>
      //       </View>

      //       <View style={{ width: '20%' }}>

      //       </View>

      //     </View>
      //   </View>

      //   <ScrollView>
      //     <View style={{ marginTop: 10, marginBottom: 10, padding: 10 }}>
      //       {this.state.loading == false ? null : this.renderButton()}
      //       <FlatList
      //         pagingEnabled
      //         data={this.state.Profiles}
      //         renderItem={this.renderUsers}
      //         keyExtractor={item => item.id}
      //         numColumns={numColumns}
      //       />
      //     </View>
      //   </ScrollView>


      // </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});