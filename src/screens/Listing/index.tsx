import React from 'react';
import {
  SafeAreaView,
  Keyboard,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function Listing() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={null}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <Header />

            <View style={styles.spacing}>
              <Input />
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}