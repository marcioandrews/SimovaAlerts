import React from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity,
TouchableHighlight, TextInput, ImageBackground  } from 'react-native';

import LogoSimova from '../../assets/svg/LogoSimova.svg';
import LogoSimovaAlerts from '../../assets/svg/LogoSimovaAlerts.svg';




const Splash = () => {
  return (
 
  <View style={{ backgroundColor: '#005B86', flex:1, justifyContent: "center",
  flexDirection: "column",}}>
    <View style={{ backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center',
    alignItems: 'center',}}>
      <LogoSimovaAlerts style={{ width: '75%', height:'55%', }}/>

    </View>
    <View style={{ backgroundColor: '#005B86', position: "absolute",
  flexDirection: "column", justifyContent: "center", alignItems: "center",width:'100%', bottom: '1%', height: '15%',}}>
      <Text style={{ color:'#fff',  }}> desenvolvido por </Text>
      <LogoSimova style={{ width: '75%', height:'75%', }}/>

    </View>
  </View>
  );
};



export default Splash;