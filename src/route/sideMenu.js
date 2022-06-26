import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-context';
import sideMenuDesign from '../route/sideMenuDesign';
import login from '../component/login';
import home from '../component/Home';
import dashBoardBottomRetailer from './dashBoardBottomRetailer';


const sideMenu = createDrawerNavigator({


  home:{
    screen: home
}

}, {
  drawerWidth: 0,
  initialRouteName: 'home',
  contentComponent: sideMenuDesign,
});


export default (sideMenu);

