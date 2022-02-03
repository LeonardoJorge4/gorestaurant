import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/theme';

export function Input() {
  const [selected, setSelected] = useState(false);

  return (
    <View style={[styles.container, selected && styles.border]}>
      <Feather
        size={24}
        name="search"
        style={styles.icon}
        color={
          selected 
          ? theme.colors.red
          : theme.colors.input
        }
      />
      <TextInput
        style={styles.input}
        onFocus={() => setSelected(!selected)}
        onBlur={() => setSelected(!selected)}
        placeholder="Qual comida você procura?"
      />
    </View>
  )
}