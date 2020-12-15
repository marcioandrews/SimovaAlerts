import { PixelRatio, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({

  main: {
    flex:1,
    paddingHorizontal:20 ,
    marginTop:5,

  },

  botaomenu: {
    backgroundColor: "#005B86", 
    borderRadius: 12,
  },

  containerHeader: {
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    paddingTop: getStatusBarHeight(), 
  },

  container: {
    flex: 1.9, 
    backgroundColor: "#005B86", 
    borderRadius: 45, 
    paddingHorizontal: 5, 
    paddingVertical: 5, 
    //marginTop:5,
    alignItems: "center",
    justifyContent:'center',
  },

  container2: {
    flex: 5, 
    justifyContent:'space-around',
    backgroundColor: "#fff", 
    borderRadius: 45, 
    paddingVertical: 15,
    marginTop:15,
    paddingHorizontal:35,
  },

  container3: {
    flex: 1, 
    
    //backgroundColor:'red',
  },


  linhasalerts: {
    marginTop:"3%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-between',

    // alignContent: "center",
  },

  strokeHorizontalGray: {
    backgroundColor:'#E5E5E5',
    height: 2.5,
    width: 325,
    alignSelf: "center",
    
  },

  strokeHorizontalAmarelo: {
    backgroundColor:'#E8CC83',
    height: 2.5,
    width: 325,
    alignSelf: "center",
    
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Ubuntu_700Bold',
    marginBottom:5,
    
    
   
  },

  
  subtitle: {
    marginTop:5,
    color: '#E2B85C',
    fontSize: 24,
    fontFamily: 'Ubuntu_500Medium',
    
   
  },

  text: {
    marginTop:5,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Ubuntu_400Regular',
    textAlign: "center",
    //width: 280,
    
    
   
  },

  alerts: {
    position:'absolute',
    color: '#5F5F5F',
    fontSize: 22,
    fontFamily: 'Ubuntu_400Regular',
    left:50,
    


   
  },

  textnumero: {
    position:'absolute',
    color: '#999999',
    fontSize: 22,
    fontFamily: 'Ubuntu_400Regular',
    right:50,
   
  },

});

export default styles;