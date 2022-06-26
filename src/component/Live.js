import React from 'react';
import { StyleSheet, Picker, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList, Animated, PanResponder, AsyncStorage, Alert, Modal } from 'react-native';
const { width } = Dimensions.get('window')
import { ScrollView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome5, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { getDistance, getPreciseDistance } from 'geolib';
const numColumns = 2;
const height = width * 100 / 90;

export default class live extends React.Component {
  constructor() {
    super()
    this.state = {
      Users: [
        { id: 1, IMG: require('./../image/1.jpg'), Name: 'Ahmmed, 20', Views: '100' },
        { id: 2, IMG: require('./../image/2.jpg'), Name: 'Ali, 26', Views: '346' },
        { id: 3, IMG: require('./../image/3.jpg'), Name: 'Raza, 22', Views: '654' },
        { id: 4, IMG: require('./../image/4.jpg'), Name: 'Usman, 27', Views: '500' },
        { id: 5, IMG: require('./../image/5.jpg'), Name: 'Fahad, 30', Views: '987' },
        { id: 6, IMG: require('./../image/6.jpg'), Name: 'Mudassar, 29', Views: '234' },
      ],
      Categories: [
        { id: 1, Name: 'Trending' },
        { id: 2, Name: 'Nearby' },
        { id: 3, Name: 'Date' },
        { id: 4, Name: 'New' },
        { id: 5, Name: 'Favorites' },
        { id: 6, Name: 'Newest' },
      ],
      images: [
        { img: require('./../image/2.jpg') },
        { img: require('./../image/3.jpg') },
        { img: require('./../image/5.jpg') },
      ],
      active: 0
    }
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide })
    }
  }

  renderUsers = ({ item }) => {
    return (

      <View style={{ width: '50%', height: '50%', padding: 5, marginTop: 5 }}>
        <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', justifyContent: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
          <TouchableOpacity style={{ width: '100%', marginRight: 0 }} onPress={() => this.props.navigation.navigate('addetail', { ID: item.id })}>
            <View>
              <Image source={item.IMG} style={{ width: '100%', height: 150, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 16, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>{item.Name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{width:20, height:20, marginLeft:10, marginTop:5}} source={require('./../image/eye.png')} />
              <Text style={{ paddingLeft: 10, paddingRight: 5, paddingBottom: 10, paddingTop: 8, fontSize: 12, color: '#747474' }}>{item.Views}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )

  }

  renderCategories = ({ item }) => {
    return (

      <TouchableOpacity style={{ padding: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', backgroundColor:'#fe0000', color:'#fff', padding:10, borderRadius:50 }}>
          {item.Name}
        </Text>
      </TouchableOpacity>

    )
  }

  renderSliderImages = ({ item }) => {
    return (
      <View>
        <Image style={styles.Slider} source={item.img} />
      </View>
    )
  }


  render() {
    return (
      <View></View>

      // <View style={{ flex: 1 }}>
      //   <View style={{ backgroundColor: '#000', height: '4%' }}></View>

      //   <View style={{ height: 50, backgroundColor: '#fff' }}>
      //     <View style={{ marginLeft: wp('5%'), marginTop: 17, flexDirection: 'row' }}>

      //       <View style={{ width: '20%' }}>
      //         <TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={() => this.props.navigation.navigate('Profile')}>
      //           <FontAwesome5 name='user' color='#B1B1B1' size={20} />
      //         </TouchableOpacity>
      //       </View>

      //       <View style={{ width: '55%' }}>
      //         <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color:"#B1B1B1" }}>Live</Text>
      //       </View>

      //       <View style={{ width: '20%' }}>
      //         <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 10 }} onPress={() => this.setState({ filter: true })}>
      //           <FontAwesome5 name='search' color='#B1B1B1' size={20} />
      //         </TouchableOpacity>
      //       </View>

      //     </View>
      //   </View>

      //   <ScrollView>

      //     <View>
      //       <ScrollView horizontal>
      //         <FlatList
      //           pagingEnabled
      //           horizontal
      //           data={this.state.Categories}
      //           renderItem={this.renderCategories}
      //           keyExtractor={item => item.id}
      //         />
      //       </ScrollView>
      //     </View>

      //     <View>
      //       <FlatList
      //         pagingEnabled
      //         horizontal
      //         onScroll={this.change}
      //         showsHorizontalScrollIndicator={false}
      //         data={this.state.images}
      //         renderItem={this.renderSliderImages}
      //         keyExtractor={item => item.id}
      //       />
      //       <View style={styles.pagging}>
      //         {
      //           this.state.images.map((i, k) => (
      //             <Text style={k == this.state.active ? styles.paggingActiveText : styles.paggingText}>⬤</Text>
      //           ))
      //         }
      //       </View>
      //     </View>

      //     <View style={{ marginTop: 10, marginBottom: 10 }}>
      //       <FlatList
      //         pagingEnabled
      //         data={this.state.Users}
      //         renderItem={this.renderUsers}
      //         keyExtractor={item => item.id}
      //         numColumns={numColumns}
      //       />
      //     </View>
      //   </ScrollView>

      //   <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle} >
      //     <Image source={require('./../image/startstream.png')} style={styles.FloatingButtonStyle} />
      //   </TouchableOpacity>

      // </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Slider: {
    width: width,
    height: 175,
    alignSelf: 'center',
  },
  pagging: {
    flexDirection: 'row', alignSelf: 'center'
  },
  paggingText: {
    color: '#888', marginTop: -35, margin: 3
  },
  paggingActiveText: {
    color: '#fff', marginTop: -35, margin: 3
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 160,
    height: 160,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 150,
    bottom: 10,
  },

});