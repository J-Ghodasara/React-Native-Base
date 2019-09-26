import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,


} from "react-navigation";

import Splash from '../screen/Splash/Splash';
// import Login from '../screen/Login/Login';
// import ForGotPassword from '../screen/ForgotPassword/ForgotPassword';
// import OnBoarding from '../screen/OnBoarding/OnBoardingMain';
// import Home from '../screen/Home/Home';
// import FindFriend from '../screen/FindFriends/FindFriends';
// import CompleteProfile from '../screen/CompleteProfile/CompleteProfile';
// import ChangePhoneNumber from '../screen/ChangePhoneNumber/ChangePhoneNumber';
// import VerificationCode from '../screen/VerificationCode/VerificationCode';
// import SetLocation from '../screen/SetLocation/SetLocation';
// import SearchLocation from '../screen/SearchLocation/SearchLocation';
// import GooglePlaceScreen from '../screen/SearchLocation/GooglePlaceScreen';
// import Feed from '../screen/Feed/Feed';
// import Notification from '../screen/Notification/Notification';
// import Profile from '../screen/Profile/Profile'
import colors from "../config/colors";
import constant from "../config/constant";
import dimen from "../config/dimen";
// import IcHome from "../assets/image/ic_home.svg";
// import IcHomeBlack from '../assets/image/ic_home_black.svg';
// import IcFeedRed from '../assets/image/ic_feed_red.svg';
// import IcFeedBlack from '../assets/image/ic_feed_black.svg';
// import IcNotiRed from '../assets/image/ic_noti_red.svg';
// import IcNotiBlack from '../assets/image/ic_noti_black.svg';
// import IcProfileRed from '../assets/image/ic_profile_red.svg';
// import IcProfileBlack from '../assets/image/ic_profile_black.svg';
import React from 'react';
// import BtnPost from '../assets/image/btn_post.svg';
// import CreatePost from '../screen/CreatePost/CreatePost';
// import Setting from '../screen/Setting/Setting';
// import string from "../config/string";
// import ChangePassword from '../screen/ChangePassword/ChangePassword';
// import EditProfile from '../screen/EditProfile/EditProfile';
// import UserList from '../screen/UsersList/UsersList'
// import PostExpanded from '../screen/CreatePost/PostExpanded'
// import PostSelectionOption from '../screen/CreatePost/PostSelectionOption'
// import TermsAndPrivacy from '../screen/TermsAndPrivacy/TermsAndPrivacy'
// import SearchPopularHistory from '../screen/Search/SearchPopularHistory'
// import AllSearchDetails from '../screen/Search/AllSearchDetails'
// import FilterPostImage from '../screen/CreatePost/FilterPostImage'
// import GooglePlaceTown from '../screen/EditProfile/GooglePlaceTown'
// import EnableLocation from '../screen/EnableLocation/EnableLocation'

// const BottomNavigator = createBottomTabNavigator({
//   Home: {
//     screen:
//       createStackNavigator({
//         Home: {
//           screen: Home,
//           navigationOptions: {
//             header: null
//           }
//         },

//         SearchPopularHistory:
//         {
//           screen: SearchPopularHistory,
//         },

//         AllSearchDetails: {
//           screen: AllSearchDetails,
//         },
//         UserList: {
//           screen: UserList,
//           navigationOptions: {
//             title: 'Followers',
//             tabBarVisible: false,
//           },
//         },
//         OtherUserProfile: {
//           screen: Profile,
//           navigationOptions: {
//             // header: null,
//             // tabBarVisible: false,
//           },
//         },

//       }, {
//           initialRouteName: 'Home',
//           defaultNavigationOptions: {
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },

//           },
//         }),
//     // navigationOptions: {
//     //   tabBarIcon: ({ focused }) => (
//     //     focused ? <IcHome /> : <IcHomeBlack />
//     //   )
//     // },

//     navigationOptions: ({ navigation }) => {
//       let { routeName } = navigation.state.routes[navigation.state.index];
//       let navigationOptions = {
//         tabBarIcon: ({ focused }) => (
//           focused ? <IcHome /> : <IcHomeBlack />
//         ),
//       };
//       if (routeName === 'SearchPopularHistory'
//         || routeName === 'AllSearchDetails'
//         || routeName === 'OtherUserProfile'
//         || routeName === 'UserList') {
//         navigationOptions.tabBarVisible = false;
//       }
//       return navigationOptions;
//     }

//   },
//   Feed: {
//     screen:
//       createStackNavigator({
//         Feed: {
//           screen: Feed,
//           navigationOptions: {
//             header: null
//           }

//         }
//       },
//         {
//           initialRouteName: 'Feed',
//           defaultNavigationOptions: {
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },

//           },
//         }),
//     navigationOptions: {
//       tabBarIcon: ({ focused }) => (
//         focused ? <IcFeedRed /> : <IcFeedBlack />
//       )
//     },

//   },
//   CreatePost: {
//     screen:
//       createStackNavigator({
     
//         CreatePost: {
//           screen: CreatePost,
//           // navigationOptions: {
//           //   // header: null
//           // }
//         },

//         PostExpanded: {
//           screen: PostExpanded,
//           navigationOptions: {
//             title: 'Upload Post',
//           }
//         },

//         PostSelectionOption: {
//           screen: PostSelectionOption,
//           // navigationOptions: {
//           //   header: null
//           // }
//         },

//         FilterPostImage: {
//           screen: FilterPostImage,
//         }

//       }, {
//           defaultNavigationOptions: {
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },

//           },
//         }),
//     navigationOptions: {
//       tabBarOptions: {
//         showIcon: true,
//         showLabel: false,

//       },
//       tabBarVisible: false,
//       labelStyle: { margin: 0, padding: 0, },
//       title: '',
//       tabBarIcon: ({ focused }) => (
//         <BtnPost style={{ marginTop: 15 }} />

//       ),


//     },

//   },
//   Notification: {
//     screen:
//       createStackNavigator({
//         Notification: {
//           screen: Notification,
//           navigationOptions: {
//             header: null
//           }

//         },
//       }, {
//           defaultNavigationOptions: {
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },

//           },
//         }),
//     navigationOptions: {
//       tabBarIcon: ({ focused }) => (
//         focused ? <IcNotiRed /> : <IcNotiBlack />
//       )
//     },

//   },
//   Profile: {
//     screen:
//       createStackNavigator({
//         Profile: {
//           screen: Profile,
//           navigationOptions: {
//             header: null,
//           },
//         },
//         UserList: {
//           screen: UserList,
//           navigationOptions: {
//             title: 'Followers',
//             tabBarVisible: false,
//           },
//         },
//         OtherUserProfile: {
//           screen: Profile,
//           navigationOptions: {
            
          
//           },
//         },
//         Setting: {
//           screen: Setting,
//           navigationOptions: {
//             title: 'Settings',
//             tabBarVisible: false,
//           },
//         },
//         ChangePassword: {
//           screen: ChangePassword,
//           navigationOptions: {
//             title: string.label_change_password,
//             tabBarVisible: false,
//           },
//         },
//         EditProfile: {
//           screen: EditProfile,
//           navigationOptions: {
//             title: string.label_editProfile,
//             tabBarVisible: false,
//           },
//         },
//         EditProfileVerificationCode: {
//           screen: VerificationCode,
//           navigationOptions: {
//             tabBarVisible: false,
//           }
//         },
//         Facebook: {
//           screen: FindFriend,
//           navigationOptions: {
//             // header: null,
//             // tabBarVisible: false,
//           },
//         },
//         TermsAndPrivacy: TermsAndPrivacy,
//         GooglePlaceTown: {
//           screen: GooglePlaceTown,
//           navigationOptions: {
//             // header: null,
//           },
//         }

//       },
//         {
//           initialRouteName: 'Profile',
//           defaultNavigationOptions: {
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },

//           },
//         }
//       ),

//     navigationOptions: ({ navigation }) => {
//       let { routeName } = navigation.state.routes[navigation.state.index];
//       let navigationOptions = {
//         title: 'Profile',
//         tabBarIcon: ({ focused }) => (
//           focused ? <IcProfileRed /> : <IcProfileBlack />
//         ),
//       };
//       if (routeName === 'Setting'
//         || routeName === 'ChangePassword'
//         || routeName === 'EditProfile'
//         || routeName === 'Facebook'
//         || routeName === 'UserList'
//         || routeName === 'OtherUserProfile'
//         || routeName === 'EditProfileVerificationCode'
//         || routeName === 'TermsAndPrivacy'
//         // || routeName === 'GooglePlaceTown'
//       ) {
//         navigationOptions.tabBarVisible = false;
//       }
//       return navigationOptions;
//     }
//   }
// }, {
//     tabBarOptions: {
//       activeTintColor: colors.colorTomato,
//       inactiveTintColor: colors.colorBlack,
//       labelStyle: {
//         fontFamily: constant.font.muliBold,
//         fontSize: dimen.fontSize.textAppearanceCaption_12
//       },
//       tabStyle: {
//         paddingVertical: 5

//       },
//       showIcon: true

//     }

//   }
// );

// BottomNavigator.navigationOptions = {
//   header: null
// }




// const AppStack = createStackNavigator(
//   {
//     BottomNavigator: BottomNavigator,
//     // Home:Home,
//     SetLocation: SetLocation,
//     EditProfile: EditProfile,
//     SearchLocation: SearchLocation,
//     GooglePlaceScreen: {
//       screen: GooglePlaceScreen,
//       navigationOptions: {
//         // header: null,
//       },
//     }
//   }
// );
// // , {
// //   headerMode: 'none',
// //   navigationOptions: {
// //     headerVisible: false,
// //   }
// // }

// const AuthStack = createStackNavigator({
//   Login: {
//     screen: Login,
//     headerMode: 'none',
//     navigationOptions:{
//       header: null,
//     }
//   },
//   ForGotPassword: {
//     screen: ForGotPassword,
//     headerMode: 'none',
//     navigationOptions:{
//       // header: null,
//     }
//   },
//   CompleteProfile: {
//     screen: CompleteProfile,
//     headerMode: 'none',
//     navigationOptions:{
//       header: null,
//     }
//   },
//   TermsAndPrivacy: {
//     screen: TermsAndPrivacy,
//     navigationOptions:{
//       headerVisible: true,
//     }
//   },
 
  

// }, {
//     initialRouteName: 'Login',
//     // headerMode: 'none',
//     // defaultNavigationOptions: {
//     //   headerVisible: false,
//     // }
//   }

// );

// const FindFriendStack = createStackNavigator({
//   FindFriend: {
//     screen: FindFriend,
//     navigationOptions: {
//       header: null,
//       headerVisible: false
//     },
//   },
//   OtherUserProfile: {
//     screen: Profile,
//     navigationOptions: {
//       // header: null,
//       // headerVisible: false
//     },
//   },
//   UserList: {
//     screen: UserList,
//     navigationOptions: {
//       title: 'Followers',
//       tabBarVisible: false,
//     },
//   },
// }, {
//     initialRouteName: 'FindFriend',
//     defaultNavigationOptions: {
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },

//     },
//   }

// );





const Nav = createSwitchNavigator({
  Splash: Splash,
  // OnBoarding: OnBoarding,
  // Auth: AuthStack,
  // EnableLocation:EnableLocation,
  // FindFriendStack,
  // ChangePhoneNumber: ChangePhoneNumber,
  // VerificationCode: VerificationCode,
  // App: AppStack
},
  {
    // initialRouteName: 'OnBoarding',
    animationType: 'none',
    animationEnabled: false,
    swipeEnabled: false,
  });

const AppContainer = (props) = createAppContainer(Nav);
export default AppContainer