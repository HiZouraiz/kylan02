import signup from './../component/signup';
import signup2 from './../component/signup2';
import signup3 from './../component/signup3';
import signup4 from './../component/signup4';
import signup5 from './../component/signup5';
import signup6 from './../component/signup6';
import signup7 from './../component/signup7';
import signup8 from './../component/signup8';
import signup9 from './../component/signup9';
import signup10 from './../component/signup10';
import signup11 from './../component/signup11';
import invites from './../component/invites';
import editProfile from './../component/editProfile';
import myProfile from './../component/myProfile';
import settings from './../component/settings';
import login from './../component/login';
import homeLocation from './../component/homeLocation';
import forgotPassword from './../component/forgotPassword';
import verification from './../component/verification';
import emailverification from './../component/emailverification';
import verifyEmail from './../component/verifyEmail';
import findpeople from '../component/findpeople';
import nearby from '../component/nearby';
import live from '../component/Live';
import Chat from '../component/Chat';
import Profile from '../component/Profile';
import userprofile from '../component/userprofile';
import news from '../component/news';
import message from '../component/message';
import subscribe from './../component/subscribe';
import loginwithemail from './../component/loginwithemail';
import sideMenu from '../route/sideMenu';
import Home from './../component/Home';
import home2 from './../component/home2';
import { createStackNavigator } from 'react-navigation-stack';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route = createStackNavigator({

    login: {
        screen: login,
        navigationOptions: {
            header: null,
        },
    },
    signup: {
        screen: signup,
        navigationOptions: {
            header: null,
        },
    },
    signup2: {
        screen: signup2,
        navigationOptions: {
            header: null,
        },
    },
    signup3: {
        screen: signup3,
        navigationOptions: {
            header: null,
        },
    },
    signup4: {
        screen: signup4,
        navigationOptions: {
            header: null,
        },
    },
    signup5: {
        screen: signup5,
        navigationOptions: {
            header: null,
        },
    },
    signup6: {
        screen: signup6,
        navigationOptions: {
            header: null,
        },
    },
    signup7: {
        screen: signup7,
        navigationOptions: {
            header: null,
        },
    },
    signup8: {
        screen: signup8,
        navigationOptions: {
            header: null,
        },
    },
    signup9: {
        screen: signup9,
        navigationOptions: {
            header: null,
        },
    },
    signup10: {
        screen: signup10,
        navigationOptions: {
            header: null,
        },
    },
    signup11: {
        screen: signup11,
        navigationOptions: {
            header: null,
        },
    },
    invites: {
        screen: invites,
        navigationOptions: {
            header: null,
        },
    },
    editProfile: {
        screen: editProfile,
        navigationOptions: {
            header: null,
        },
    },
    myProfile: {
        screen: myProfile,
        navigationOptions: {
            header: null,
        },
    },
    homeLocation: {
        screen: homeLocation,
        navigationOptions: {
            header: null,
        },
    },
    settings: {
        screen: settings,
        navigationOptions: {
            header: null,
        },
    },
    forgotPassword: {
        screen: forgotPassword,
        navigationOptions: {
            header: null,
        },
    },
    verification: {
        screen: verification,
        navigationOptions: {
            header: null,
        },
    },
    emailverification: {
        screen: emailverification,
        navigationOptions: {
            header: null,
        },
    },
    verifyEmail: {
        screen: verifyEmail,
        navigationOptions: {
            header: null,
        },
    },
    findpeople: {
        screen: findpeople,
        navigationOptions: {
            header: null,
        },
    },
    nearby: {
        screen: nearby,
        navigationOptions: {
            header: null,
        },
    },
    live: {
        screen: live,
        navigationOptions: {
            header: null,
        },
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            header: null,
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null,
        },
    },
    userprofile: {
        screen: userprofile,
        navigationOptions: {
            header: null,
        },
    },
    news: {
        screen: news,
        navigationOptions: {
            header: null,
        },
    },
    message: {
        screen: message,
        navigationOptions: {
            header: null,
        },
    },
    subscribe: {
        screen: subscribe,
        navigationOptions: {
            header: null,
        },
    },
    loginwithemail: {
        screen: loginwithemail,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    home2: {
        screen: home2,
        navigationOptions: {
            header: null,
        },
    },

}, {
    initialRouteName: 'home2'
})

export default createAppContainer(Route);

