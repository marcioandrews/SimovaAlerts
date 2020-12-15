import { PixelRatio, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({

  main: {
    flex:1,
    backgroundColor: '#005B86',
  },

  container: {
    paddingTop: getStatusBarHeight(),
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
    top: "5%",
    width: '100%',
    height: 50,
    
  },
  
  container2: {
    flex:8,
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    
  },

  container3: {
    flex: 1,
    flexDirection: 'row-reverse', 
    justifyContent: 'space-between',
    //paddingHorizontal: '8%',

  },

  container4: {
    flex: 2,
    //paddingTop: '10%',
    alignItems: "center",
    // backgroundColor: 'red'
    
   

  },

  teclado: {
    alignItems: "center",
    flex:1,
    
  
    
   

  },
  
  title: {
    
    color: '#005B86',
    fontSize: 30,
    fontFamily: 'Ubuntu_700Bold',
    width: '75%',
    height:'160%',
    paddingTop:'12%',
    paddingLeft: '8%',
   
  },

  subtitle: {
    position:'relative',
    color: '#E2B85C',
    fontSize: 20,
    fontFamily: 'Ubuntu_400Regular',
    //paddingLeft: '8%',
    //textAlign: 'left',
    //width: '42%',
    right: 200,
    
    //height:'100%',
    top: '30%',
    
  },


  textButtonHeader: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Ubuntu_500Medium',
    //textDecorationLine: "underline"
    
  },

  subTex: {
    color: '#005B86',
    fontSize: 22,
    fontFamily: 'Ubuntu_400Regular',
    width: 310,
    top:15,
    
  },


  strokeVertical: {
    backgroundColor:'#E8CC83',
    width: 2.5,
    height: 35,
    
  },

  strokeHorizontal: {
    backgroundColor:'#E8CC83',
    height: 2.5,
    width: '100%',
    alignSelf: "center",
    
  },

  strokeHorizontalGray: {
    backgroundColor:'#E5E5E5',
    height: 2.5,
    width: 300,
    marginBottom: '5%',
    
  },


  element: {
    top: '10%',
    height: 95,
    width: 95,
    left: 10,
    

    
  },


  button: {
    backgroundColor: "#34cb79",
    height: 60,
    width:'100%',
    flexDirection: "row",
    borderRadius: 18,
    overflow: "hidden",
    alignItems: "center",
    top: '5%',
    
    
  },

  buttonIcon: {
    height: '100%',
    width: '20%',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    //left: '100%',
    paddingHorizontal: '22%',
    color: "#FFF",
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 26,
  },
});

export default styles;






// main: {
//   flex:0,
//   backgroundColor: '#ffffff',
//   //flexDirection: "row-reverse",
//   borderTopRightRadius: 50,
//   borderTopLeftRadius: 50,
//   //alignItems: "center",
//   paddingTop: '10%',
//   paddingBottom: '2%',
  
  
// },

// container: {
//   paddingTop: '5%',
//   flex: 1,
//   backgroundColor: '#005B86',
// },

// container2: {
//   flex:0,
//   paddingTop: getStatusBarHeight(),
//   backgroundColor: '#005B86',
//   justifyContent: 'space-between',
//   flexDirection: 'row',
//   paddingBottom: '5%',
// },

// title: {
//   color: '#005B86',
//   fontSize: 34,
//   fontFamily: 'Ubuntu_700Bold',
//   left: '12%',
//   width: 260,
  
 
// },

// subtitle: {
//   color: '#E2B85C',
//   fontSize: 20,
//   fontFamily: 'Ubuntu_400Regular',
//   left: '12%',
//   top: '5%',
  
// },

// buttonHeader1: {
//   height:"300%",
//   backgroundColor: '#005B86',
//   paddingLeft: '13%',
  
  
// },

// textButtonHeader: {
//   color: '#fff',
//   fontSize: 22,
//   fontFamily: 'Ubuntu_500Medium',
  
// },

// subTex: {
//   color: '#005B86',
//   fontSize: 22,
//   fontFamily: 'Ubuntu_400Regular',
//   width: 300,
  
// },

// buttonHeader2: {
//   height:"300%",
//   backgroundColor: '#005B86',
//   paddingRight: '13%',
  
// },

// strokeVertical: {
//   backgroundColor:'#E8CC83',
//   width: 2.5,
//   height: '250%',
  
// },

// strokeHorizontal: {
//   backgroundColor:'#E8CC83',
//   height: 2.5,
//   width: '65%',
//   alignSelf: "center",
  
// },

// strokeHorizontalGray: {
//   backgroundColor:'#E5E5E5',
//   height: 2.5,
//   width: 300,
//   alignSelf: "center",
//   marginBottom: '10%',
  
// },

// container3: {
//   flex: 1,
//   backgroundColor: '#fff',
//   paddingTop: '15%',
//   alignItems: "center",
//   marginBottom: '-100%',
  
  

// },

// element: {
//   position: "absolute",
//   top: 0,
//   left: '68%',
//   right: 0,
//   bottom: '1%',
//   width: '30%',

  
// },


// button: {
//   backgroundColor: "#34cb79",
//   height: 60,
//   width:'79%',
//   flexDirection: "row",
//   borderRadius: 18,
//   overflow: "hidden",
//   alignItems: "center",
//   top: '5%',
//   bottom: '8%',
// },

// buttonIcon: {
//   height: 60,
//   width: 60,
//   borderTopLeftRadius: 18,
//   borderBottomLeftRadius: 18,
//   backgroundColor: "rgba(0, 0, 0, 0.1)",
//   justifyContent: "center",
//   alignItems: "center",
// },

// buttonText: {
//   flex: 1,
//   justifyContent: "center",
//   textAlign: "center",
//   right: '18%',
//   color: "#FFF",
//   fontFamily: 'Ubuntu_500Medium',
//   fontSize: 22,
// },
// });

// export default styles;