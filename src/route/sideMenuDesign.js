import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, TouchableOpacity, Picker, ImageBackground, View, Image, AsyncStorage } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export default class sideMenuDesign extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <ImageBackground source={require('./../image/menubg.png')} style={{ width: '100%', height: '50%' }} resizeMode='stretch'>
          <View style={{ flexDirection: 'column', height: height(30), }}>
            <View style={{ marginTop: '15%' }}>
              {/* <Image source={require('./../image/zlogo.png')} style={{ width: width(25), height: width(25), alignSelf:'center' }}></Image> */}
              {/* <Text style={{ fontSize: 15, marginTop: 20, color: '#fff', fontWeight: 'bold', alignSelf:'center' }}>Mr. Parker</Text> */}
            </View>
          </View>
        </ImageBackground>
        <ScrollView style={{ backgroundColor: '#fff', marginTop: '-60%' }}>
          <View style={{ marginLeft: 15,}}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('#') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
              <FontAwesome5
                name='calculator'
                type='font-awesome'
                color='#23a7d5'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Zakat Calculator</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <FontAwesome5
                name='wallet'
                type='font-awesome'
                color='#23a7d5'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Pay Zakat</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='user'
                type='font-awesome'
                color='#23a7d5'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
         

          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('login') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='logout'
                type='font-awesome'
                color='#23a7d5'
                size={20}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13 }}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </ScrollView>

      </View>
    );
  }
}


