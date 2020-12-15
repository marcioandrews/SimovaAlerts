import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import Home from "./src/pages/Routes/index";

import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

import Main from "./src/pages/Main";


export default function App() {
  const [fontsLoaded] = useFonts({
   
    Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold, Roboto_400Regular, Roboto_500Medium 
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Main />
    </>
  );
}
