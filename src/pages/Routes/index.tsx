import React from 'react';import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Example from '../Home/Principal/Example';
import Principal from '../Home/Principal';
import Login from '../Login';
import { color } from 'react-native-reanimated';
import CustomDrawer from '../Home/Drawer/CustomDrawer';

const AuthStack = createStackNavigator({
  Landing: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Landing',
    },
  },
  SignIn: {
    screen: Principal,
    navigationOptions: {
      headerTitle: 'Sign In',
    },
  },
  CreateAccount: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Create Account',
    },
  },
  ForgotPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Forgot Password',
    },
  },
  ResetPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Reset Password',
    },
  },
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Feed',
    },
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Search',
    },
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

const DiscoverStack = createStackNavigator({
  Discover: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Discover',
    },
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
    },
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
    },
  },
  Discover: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: 'Discover',
    },
  },
});


const SettingsStack = createStackNavigator({
  SettingsList: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Settings List',
      
    },
  },
  Profile: {
    screen: Principal,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
});

const MainDrawer = createDrawerNavigator({
  
  Home: Principal,
  Opiçao2: Principal,
  
},
  {
    contentComponent: CustomDrawer,
    //overlayColor:"#005B86"
 
    
  },
);


const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    
    Promotion1: {
      screen: Principal,
    },
    
  },
  {
    mode: "card",
    headerMode: "none",
  }
);

const Home = createSwitchNavigator({
  Loading: {
    screen: Login,
  },
  Auth: { 
    screen: Principal,
    
  },
  App: {
    screen: AppModalStack,
  },
});

export default createAppContainer(Home);