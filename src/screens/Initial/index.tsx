import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";

import bowlIcon from "../../assets/bowl.png";
import backgroundImage from '../../assets/bowlBackground.png';
import { Feather } from '@expo/vector-icons'; 

import { styles } from './styles';

export function Initial() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={backgroundImage}
        style={styles.imageBackground}
      >
        <View style={styles.content}>
          <View>
            <Image
              source={bowlIcon}
              style={styles.image}
            />
            <Text style={styles.subtitle}>
              GoRestaurant
            </Text>
            <Text style={styles.text}>
              Comida Italiana, sim.
            </Text>
          </View>

          
          <View style={styles.containerTitle}>
            <Text style={styles.title}>
              Uma{"\n"}
              verdadeira{"\n"}
              experiência{"\n"}
              Italiana.
            </Text>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
            >
              <View style={styles.containerTextButton}>
                <Text style={styles.textButton}>
                  Entrar no Restaurante
                </Text>
              </View>
              <View style={styles.containerIcon}>
                <Feather
                  size={24}
                  name="log-in"
                  color="#7A1818"
                />
              </View>
            </TouchableOpacity>
          </View>

        </View>
       </ImageBackground>
    </SafeAreaView>
  )
}