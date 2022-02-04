import React, { useState } from 'react';
import { Image, ImageProps, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  description: string;
  price: string;
  source: ImageProps;
}

export function CardLong({ title, description, price, source }: Props) {

  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.container}
    >
      <View style={styles.containerImage}>
        <Image
          source={source}
        />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
        <Text style={styles.price}>
          R$ {price}
        </Text>
      </View>

    </TouchableOpacity>
  )
}