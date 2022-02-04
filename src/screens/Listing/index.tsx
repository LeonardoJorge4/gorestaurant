import React from 'react';
import {
  SafeAreaView,
  Keyboard,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SectionList,
  Text,
  FlatList,
} from "react-native";

import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { CardLong } from '../../components/CardLong';

import beefPng from '../../assets/beef.png';
import pizzaPng from '../../assets/pizza.png';
import winesPng from '../../assets/wines.png';
import pastaPng from '../../assets/pastas.png';
import shrimpPng from '../../assets/shrimp.png';
import veggiePng from '../../assets/veggie.png';
import theSaucePng from '../../assets/theSauce.png';

import { styles } from './styles';

export function Listing() {
  const data = [
    {
      id: 1,
      title: "Massas",
      imageSource: pastaPng
    },
    {
      id: 2,
      title: "Pizzas",
      imageSource: pizzaPng
    },
    {
      id: 3,
      title: "Carnes",
      imageSource: beefPng
    },
    {
      id: 4,
      title: "Vinhos",
      imageSource: winesPng
    },
  ]

  const dishes = [
    {
      id: 1,
      title: "Ao Molho",
      description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas.",
      price: "19,90",
      imageSource: theSaucePng
    },
    {
      id: 2,
      title: "Veggie",
      description: "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
      price: "19,90",
      imageSource: veggiePng
    },
    {
      id: 3,
      title: "A la Camarón",
      description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas.",
      price: "19,90",
      imageSource: shrimpPng
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={null}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.content}>
              <Header />

              <View style={styles.spacing}>
                <Input />

                <Text style={styles.title}>
                  Categorias
                </Text>

                <FlatList
                  horizontal
                  data={data}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <Card
                      title={item.title}
                      source={item.imageSource}
                    />
                  )}
                  ItemSeparatorComponent={() => <View style={styles.separator} />}
                />

                <Text style={styles.title}>
                  Pratos
                </Text>

                <FlatList
                  data={dishes}
                  scrollEnabled
                  horizontal={false}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <CardLong
                      price={item.price}
                      title={item.title}
                      source={item.imageSource}
                      description={item.description}
                    />
                  )}
                  ItemSeparatorComponent={() => <View style={styles.separatorLong} />}
                />

              </View>

            </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}