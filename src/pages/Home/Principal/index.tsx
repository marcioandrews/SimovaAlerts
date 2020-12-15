import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Feather as Icon } from "@expo/vector-icons";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styles from './styles';
import LogoSimovaAlerts from '../../../../src/assets/svg/LogoSimovaAlerts.svg';





const Principal = ({ navigation }) => {

  function sair() {
    navigation.navigate("Loading");
  }
  return (
    <>
      <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent/>
    
    <View style={styles.main}>
      <View style={styles.containerHeader}>
        <View style={styles.botaomenu}>
          <Icon style={{margin:6}} onPress={navigation.openDrawer} name="menu" color="#fff" size={36} />  
        </View>
        <LogoSimovaAlerts style={{ width: '70%', height:'65%', }}/>
        <Icon style={{margin:6}} onPress={navigation.openDrawer} name="more-vertical" color="#005B86" size={36} />

      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Marcio Andrews</Text>
        <View style={styles.strokeHorizontalAmarelo} ></View>
        <Text style={styles.subtitle}>UI/UX Designer</Text>
        <Text style={styles.text}>Responsavel por criar o design e desenvolvimento do app 
Simova Alerts.</Text>
      </View>

      <View style={styles.container2}>

        <View style={styles.linhasalerts}>
          <Icon name="alert-triangle" color="#E2B85C" size={30} />  

          <Text style={styles.alerts}>
            Meus Alertas
          <Text style={styles.textnumero}>
           {' '} 45
          </Text>
          </Text>
          <Icon name="chevron-right" color="#005B86" size={30} />
        </View>

        <View style={styles.strokeHorizontalGray} ></View>

        <View style={styles.linhasalerts}>
          <Icon name="trending-up" color="#E2B85C" size={30} />  

          <Text style={styles.alerts}>
            Indicadores
          <Text style={styles.textnumero}>
          {' '} 4
          </Text>
          </Text>
          <Icon name="chevron-right" color="#005B86" size={30} />
        </View>

        <View style={styles.strokeHorizontalGray} ></View>


        <View style={styles.linhasalerts}>
          <Icon name="book-open" color="#E2B85C" size={30} />  

          <Text style={styles.alerts}>
            Monitoria
          </Text>
          
          <Icon name="chevron-right" color="#005B86" size={30} />
        </View>

        <View style={styles.strokeHorizontalGray} ></View>


        <View style={styles.linhasalerts}>
          <Icon name="bar-chart-2" color="#E2B85C" size={30} />  

          <Text style={styles.alerts}>
            Produtividade
          </Text>
         
          <Icon name="chevron-right" color="#005B86" size={30} />
        </View>

        <View style={styles.strokeHorizontalGray} ></View>


        <View style={styles.linhasalerts}>
          <Icon name="log-out" color="#EB4336" size={30} />  

          <Text style={{ position:'absolute', color: '#EB4336', fontSize: 24, fontFamily: 'Ubuntu_400Regular', left:50,}} onPress={() => sair()}>
            Sair
          </Text>
         
        </View>

        

       
      </View>
      <View style={styles.container3}>

      <Text style={{color: '#999999',fontSize: 16, fontFamily: 'Ubuntu_400Regular',marginTop:12, textAlign: 'center',}}>
          Dados atualizados em:
      </Text>
      <Text style={{color: '#005B86',fontSize: 20, fontFamily: 'Ubuntu_400Regular', textAlign: 'center',}}>
          03 nov 2020
        </Text>
      </View>
    </View>
    </>
  );
};

export default Principal;
