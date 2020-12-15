import { PixelRatio, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({

  main: {
    backgroundColor:"#EFEFEF",
    flex: 1,
    paddingTop: getStatusBarHeight(),
    alignItems: "center",

  },
  main2: {
    backgroundColor:"#EFEFEF",
    flex: 0,
    paddingTop: getStatusBarHeight(),
    

  },

});

export default styles;