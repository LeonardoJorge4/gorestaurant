import React from 'react';
import { Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/theme';

type Props = {
  title: string;
  focused: boolean;
  icon: keyof typeof Feather.glyphMap;
}

export function OptionTabNavigator({ title, focused, icon }: Props) {
  return (
    <View style={styles.container}>
      <Feather
        size={24}
        name={icon}
        style={styles.icon}
        color={
          focused
          ? theme.colors.red
          : theme.colors.input
        }
      />
      <Text style={[
        styles.title,
        focused
          ? styles.selected 
          : styles.notSelected
        ]}>
        {title}
      </Text>
    </View>
  )
}