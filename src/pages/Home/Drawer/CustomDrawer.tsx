import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
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
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import styles from './styles';


function CustomDrawer({...props}){
  return(
    
      <View style={styles.main2}>
      <Icon name="user" color="#005B86" size={80} />
      <Text style={{textAlign: "center",}}>
        Marcio Andrews
      </Text>
      <DrawerNavigatorItems {...props} />
      </View>
    
    
  );
}

export default CustomDrawer;