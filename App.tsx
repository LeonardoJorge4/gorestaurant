import React from 'react';

import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Poppins_600SemiBold,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Routes />
        <StatusBar style="light" />
      </>
    );
  }

}