import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import logoPng from '../../assets/logo.png';
import loginPng from '../../assets/login.png';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <View style={styles.contentLogo}>
          <Image
            source={logoPng}
            style={styles.image}
          />
          <View>
            <Text style={styles.subtitle}>
              GoRestaurant
            </Text>
            <Text style={styles.text}>
              Comida Italiana, sim.
            </Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={loginPng}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}