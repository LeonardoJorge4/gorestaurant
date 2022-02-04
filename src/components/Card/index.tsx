import React, { useState } from 'react';
import { Image, ImageProps, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  source: ImageProps;
}

export function Card({ title, source }: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      onPress={() => setSelected(!selected)}
      style={[styles.container, selected && styles.border]}
    >
      <Image
        source={source}
      />
      <Text style={[
        styles.title, 
        selected 
        ? styles.red
        : styles.default
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}