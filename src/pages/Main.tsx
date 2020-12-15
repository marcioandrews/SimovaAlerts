import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import Splash from "./Splash";
import Routes from "./Routes/index";
import Login from "./Login";
import { useNavigation, useRoute } from "@react-navigation/native";
//import Constants from "expo-constants";

import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import MainService from './mainservice';



// const Gethsd: React.FC = () => {

//     const navigation = useNavigation();
//     const route = useRoute();
    
//     function handleNavigateBack() {
//       navigation.goBack();
//     }
//   }

export default class App extends React.Component {
  
  
  
  async componentDidMount() {
    
    
    
  }
  state = {
    loaded: false
  }
  constructor(props: {} | Readonly<{}>){
    
    super(props);
    MainService.load((v: any) => this.setState({loaded: true}));
  }
  render() {
    return (
        <>
        
        {this.state.loaded ? <Routes /> : <Splash />}
      
      </>
      );
    }
  };
