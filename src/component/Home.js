import React from 'react';
import { StyleSheet, Picker, Text, View, Dimensions, TouchableOpacity, ImageBackground, ActivityIndicator, Modal, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';
import { Switch } from 'react-native-paper';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import * as Animatable from 'react-native-animatable';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      region: null,
      loading: false,
      isSwitchOn: false,
      filter: false,
      isSearch: false,
      marginBottom: 0,
      interts: [
        { id: 1, interest: 'Women' },
        { id: 2, interest: 'Men' },
        { id: 3, interest: 'Everyone' },
      ],
      SelectedInterest: [],
      fromValue: '',
      toValue: '',
      value: '',
      profiles: [
        { id: 1, name: 'Josh', age: 21, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' },
        { id: 2, name: 'Julie', age: 20, image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' },
        { id: 3, name: 'Zoe', age: 19, image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80' },
        { id: 4, name: 'Noah', age: 18, image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' },
        { id: 1, name: 'Josh', age: 21, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' },
        { id: 2, name: 'Julie', age: 20, image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' },
        { id: 3, name: 'Zoe', age: 19, image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80' },
        { id: 4, name: 'Noah', age: 18, image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' },
      ],
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

  onToggleSwitch = (value) => this.setState({ isSwitchOn: value });

  header() {
    return (
      <View style={{ height: 70, backgroundColor: '#ffffff', }}>
        <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>

          <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', marginBottom: -10 }}>Location</Text>
            <Switch value={this.state.isSwitchOn} onValueChange={this.onToggleSwitch} />
          </View>

          <View style={{ width: '55%' }}>
            <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#98d4bd' }}>S u b t l e</Text>
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

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      alert('Hey! You might want to enable Location for my app, they are good.');
    } else {

      let location = await Location.getCurrentPositionAsync({});
      let latitude = location.coords.latitude
      let longitude = location.coords.longitude

      this.setState({
        region:
        {
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134
        },
        currentLat: latitude,
        currentLon: longitude
      });

    }
  }

  onchangeValueInterest = (item) => {

    const { interts } = this.state;
    const newData = interts.map(e => {
      if (e.id == item.id) {
        return {
          ...e,
          check: !e.selected
        }
      }

      return {
        ...e,
        check: e.selected
      }
    });


    const findInterest = newData.filter((card) => card.check == true)
    console.log(newData)
    this.setState({
      interts: newData,
      SelectedInterest: findInterest
    })

  }

  Interts() {
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => this.onchangeValueInterest(item)} style={{ backgroundColor: item.check == true ? '#4584DB' : '#ffffff', borderRadius: 500, padding: 10, marginRight: 10 }}>
        <View style={{ marginHorizontal: 12 }}>
          <View style={{ width: '100%' }}>
            <Text style={{ fontSize: 20 }}>{item.interest}</Text>
          </View>

        </View>
      </TouchableOpacity>
    )
    return (
      <View style={{ alignItems: 'center' }}>
        <FlatList
          horizontal
          data={this.state.interts}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }

  popup1() {
    return (
      <View style={styles.scrollView}>
        <TouchableOpacity onPress={() => this.setState({ isSearch: true })}>
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={['black', 'rgba(0,0,0,1)', 'rgba(0,0,0,0)',]}
            style={{ width: WIDTH }}
          >
            <Animatable.View animation={'slideInUp'} style={styles.popup}>
              <View >
                <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: 5 }}>Tab to open</Text>
              </View>
            </Animatable.View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }

  popup2() {
    return (
      <View style={styles.scrollView2}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={['black', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)',]}
          style={{ width: WIDTH }}
        >
          <Animatable.View animation={'slideInUp'} style={styles.popup}>
            <TouchableOpacity onPress={() => this.setState({ isSearch: false })}>
              <FontAwesome5 style={{ alignSelf: 'flex-end', marginRight: 5, marginTop: 5 }} name='times' color='#ffffff' size={30} />
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
              {this.profiles()}
            </View>

          </Animatable.View>
        </LinearGradient>
      </View >

    )
  }

  profiles() {
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={()=> this.props.navigation.navigate("Profile")} style={{ margin: 10 }}>
        <ImageBackground borderRadius={20} source={{ uri: item.image }} style={{ width: 150, height: 200 }} >
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={['black', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)',]}
            style={{ flex: 1, borderRadius: 20, justifyContent: 'flex-end' }}
          >
            <Text numberOfLines={1} style={{ color: '#ffffff', alignSelf: 'flex-end', fontSize: 20, marginRight: 10, marginBottom: 10 }}>{item.name} {item.age}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    )
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={this.state.profiles}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingLeft: 5,
            paddingRight: 5,
          }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: HEIGHT / 3 }} />}
          numColumns={2}
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

        <View>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            followsUserLocation={true}
            showsMyLocationButton={true}
            loadingEnabled
            onMapReady={() => this.setState({ marginBottom: 0 })}
            ref={el => this.mapView = el}
            region={region}
          >

          </MapView>

          {this.state.isSearch == false ?
            this.popup1()
            :
            this.popup2()
          }

        </View>

        {/* Modal 1 -- Start -- */}
        <Modal visible={this.state.filter}>
          <ImageBackground source={require('./../image/background.png')} style={{ width: '100%', height: '100%' }} resizeMode='stretch'>
            <View>
              <ScrollView>

                <View style={{ padding: 20 }}>
                  <TouchableOpacity onPress={() => this.setState({ filter: false })}>
                    <FontAwesome5 style={{ alignSelf: 'flex-end' }} name='times' color='#ffffff' size={40} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: -20, color: '#ffffff' }}>Filter</Text>
                </View>

                <View>
                  <Text style={{ color: 'white', fontSize: 25, marginLeft: 20, marginTop: 20, marginBottom: -20 }}>Location</Text>
                  <View >
                    <Slider min={0} max={40} step={4}
                      valueOnChange={value => this.setState({ value: value })}
                      initialValue={0}
                      knobColor='#00A2ff'
                      valueLabelsBackgroundColor='#3A4766'
                      inRangeBarColor='#ffffff'
                      outOfRangeBarColor='#ffffff'
                      styleSize={'small'}
                      showValueLabels={true}
                      showRangeLabels={false}
                    />
                    <Text style={{ color: '#ffffff', alignSelf: 'flex-end', fontSize: 22, marginTop: -30, marginRight: 40 }}>{this.state.value} mi</Text>
                  </View>
                </View>

                <View>
                  <Text style={{ color: 'white', fontSize: 25, marginLeft: 20, marginTop: 20, marginBottom: -20 }}>Age</Text>
                  <View>
                    <RangeSlider min={12} max={60}
                      fromValueOnChange={value => this.setState({ fromValue: value })}
                      toValueOnChange={value => this.setState({ toValue: value })}
                      initialFromValue={18}
                      inRangeBarColor='#ffffff'
                      outOfRangeBarColor='#ffffff'
                      styleSize={'small'}
                      showValueLabels={true}
                      showRangeLabels={false}
                    />
                  </View>
                </View>

                <View>
                  <Text style={{ color: 'white', fontSize: 25, marginLeft: 20, marginTop: 20, marginBottom: 20 }}>Height</Text>
                  <View>
                    <View style={styles.firstInput}>
                      <Picker
                        style={styles.input}
                        selectedValue={this.state.selectedHeight}
                        onValueChange={(height) => this.setState({ height: height })}>
                        <Picker.Item label="Select Your Height" value="" />
                        <Picker.Item label="4.0" value="4.0" />
                        <Picker.Item label="4.1" value="4.1" />
                        <Picker.Item label="4.2" value="4.2" />
                        <Picker.Item label="4.3" value="4.3" />
                        <Picker.Item label="4.4" value="4.4" />
                        <Picker.Item label="4.5" value="4.5" />
                        <Picker.Item label="4.6" value="4.6" />
                        <Picker.Item label="4.7" value="4.7" />
                        <Picker.Item label="4.8" value="4.8" />
                        <Picker.Item label="4.9" value="4.9" />
                        <Picker.Item label="5.0" value="5.0" />
                        <Picker.Item label="5.1" value="5.1" />
                        <Picker.Item label="5.2" value="5.2" />
                        <Picker.Item label="5.3" value="5.3" />
                        <Picker.Item label="5.4" value="5.4" />
                        <Picker.Item label="5.5" value="5.5" />
                        <Picker.Item label="5.6" value="5.6" />
                        <Picker.Item label="5.7" value="5.7" />
                        <Picker.Item label="5.8" value="5.8" />
                        <Picker.Item label="5.9" value="5.9" />
                        <Picker.Item label="6.0" value="6.0" />
                        <Picker.Item label="6.1" value="6.1" />
                        <Picker.Item label="6.2" value="6.2" />
                        <Picker.Item label="6.3" value="6.3" />
                        <Picker.Item label="6.4" value="6.4" />
                        <Picker.Item label="6.5" value="6.5" />
                        <Picker.Item label="6.6" value="6.6" />
                        <Picker.Item label="6.7" value="6.7" />
                        <Picker.Item label="6.8" value="6.8" />
                        <Picker.Item label="6.9" value="6.9" />
                        <Picker.Item label="7.0" value="7.0" />
                      </Picker>
                    </View>
                  </View>
                  <Text style={{ color: '#ffffff', alignSelf: 'flex-end', fontSize: 22, marginTop: -30, marginRight: 40 }}>{this.state.value} mi</Text>
                </View>


                <View>
                  <Text style={{ color: 'white', fontSize: 25, marginLeft: 20, marginBottom: 20, marginTop: 20 }}>Interested In</Text>
                  {this.Interts()}
                </View>

              </ScrollView>

              <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("#")}>
                  <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={['#71a6f0', '#71a6f0', '#3779d5']}
                    style={styles.continueButtonStyle}
                  >
                    <Text style={{ fontSize: 22, color: '#ffffff', alignSelf: 'center' }}>
                      Confirm
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

            </View>
          </ImageBackground>
        </Modal>
        {/* Modal 1 -- End -- */}

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




  scrollView: {
    margin: 0,
    bottom: 0,
    height: 160,
    position: 'absolute',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  popup: {
    backgroundColor: '#98b4db',
    width: WIDTH - 20,
    height: HEIGHT,
    alignSelf: 'center',
    padding: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  scrollView2: {
    margin: 0,
    bottom: 0,
    height: HEIGHT - 130,
    position: 'absolute',
  },

});