import React from 'react';

import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Initial } from './src/screens/Initial';

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
        <StatusBar style="light" />
        <Initial />
      </>
    );
  }

}