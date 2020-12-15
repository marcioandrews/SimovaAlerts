import React, { useState } from "react";
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

import { useNavigation } from "@react-navigation/native";

import { RectButton } from "react-native-gesture-handler";
import ElementSimovaAlerts from "../../assets/svg/ElementSimovaAlerts.svg";
import styles from './styles';

const Login: React.FC = ({ navigation }) => {
  


  function paginaHome() {
    navigation.navigate("App");
  }

  return (
    
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textButtonHeader}>LOGIN</Text>
          <View style={styles.strokeHorizontal}></View>
        </View>
        <View style={styles.strokeVertical}></View>
        <Text style={styles.textButtonHeader}onPress={() => paginaHome()}>CRIAR CONTA</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <ElementSimovaAlerts style={styles.element} />
          <Text style={styles.title}>Bem-vindo ao Simova Alerts</Text>

            <Text style={styles.subtitle} >Entre na sua conta</Text>
        
        </View>
        
        <View style={styles.container4}>
          
          <Text style={styles.subTex}>Nome de usuário ou e-mail</Text>
          <TextInput style={{ width: 300, height: 50, fontFamily: 'Ubuntu_400Regular', color: '#5F5F5F', fontSize: 16, letterSpacing:0.5 }}
          placeholder="exemplo@simova.com"
          selectionColor="#E8CC83"
          placeholderTextColor="#D0CECE"
          ></TextInput>
          
          <View style={styles.strokeHorizontalGray } ></View>

          <KeyboardAvoidingView contentContainerStyle={styles.teclado} behavior="position" enabled>
            <Text style={styles.subTex}>Senha</Text>
            <TextInput style={{ width: 300, height: 50, fontFamily: 'Ubuntu_400Regular', color: '#5F5F5F', fontSize: 16, letterSpacing:3.5 }}
            secureTextEntry={true}
            placeholder="••••••"
            selectionColor="#E8CC83"
            placeholderTextColor="#D0CECE">
            </TextInput>
          <View style={{backgroundColor:'#E5E5E5', height: 2.5, width: 300,marginBottom: '10%',}} ></View>

      
          <RectButton
            style={styles.button}
            onPress={() => paginaHome()}>
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#fff" size={32} />
            </View>
            <Text style={styles.buttonText}>LOGIN</Text>
          </RectButton>
          <View style={{ top:40, }}>
            <Text style={{ color: '#999999', fontFamily: 'Ubuntu_400Regular', fontSize: 16, }}>Esqueceu sua senha?<Text style={{ color: '#E2B85C', fontFamily: 'Ubuntu_500Medium', fontSize: 16, }}>{'  '}Entre aqui.</Text></Text>

          </View>
          </KeyboardAvoidingView>

        

        </View>
         
      </View>

    </View>
        
     
  
  );
};


export default Login;




// <View style={styles.container}>
// <View style={styles.container2}>
//   <View style={styles.buttonHeader1} >
//     <Text style={styles.textButtonHeader}>LOGIN</Text>
//     <View style={styles.strokeHorizontal}></View>
      
//   </View>
//   <View style={styles.strokeVertical}></View>
//   <View style={styles.buttonHeader2} >
//     <Text style={styles.textButtonHeader}onPress={() => Alert.alert('MSG','Nova conta')}>CRIAR CONTA</Text>
//   </View>
//   </View>
// <View style={styles.main}>
  
//   <ElementSimovaAlerts style={styles.element} />
//   <Text style={styles.title}>Bem-vindo ao Simova Alerts</Text>
//   <Text style={styles.subtitle} >Entre na sua conta</Text>
      
// </View>
// <View style={styles.container3}>
//     <Text style={styles.subTex}>Nome de usuário ou e-mail</Text>
//     <TextInput style={{ width: 300, height: 50, padding: 0, fontFamily: 'Ubuntu_400Regular', color: '#5F5F5F', fontSize: 16, }}
//       placeholder="exemplo@simova.com"
//       selectionColor="#E8CC83"
//       placeholderTextColor="#D0CECE"
//       //onChangeText={(text) => { this.setState({ usuarioemail: text })}}
//     ></TextInput>
//     <View style={styles.strokeHorizontalGray } ></View>
//     <Text style={styles.subTex}>Senha</Text>
//     <TextInput style={{ width: 300, height: 50, padding: 0, fontFamily: 'Ubuntu_400Regular', color: '#5F5F5F', fontSize: 16, lineHeight: 2.5, }}
//       secureTextEntry={true}
//       placeholder="••••••"
//       selectionColor="#E8CC83"
//       placeholderTextColor="#D0CECE"
    
//       //onChangeText={(text) => { this.setState({ password: text })}}
//       >

//     </TextInput>
//     <View style={styles.strokeHorizontalGray } ></View>  
//     <RectButton
//       style={styles.button}
//       onPress={() => paginaHome()}
//     >
//       <View style={styles.buttonIcon}>
//         <Icon name="arrow-right" color="#fff" size={24} />
//       </View>
//       <Text style={styles.buttonText}>LOGIN</Text>
//     </RectButton>
//     <Text style={{ bottom: '-4%', color: '#999999', fontFamily: 'Ubuntu_400Regular', fontSize: 16, }}>Esqueceu sua senha?<Text style={{ color: '#E2B85C', fontFamily: 'Ubuntu_500Medium', fontSize: 16, }}>{'  '}Clique aqui.</Text></Text>

//   </View>
  

// </View>
    
 

// );
// };


// export default Login;

