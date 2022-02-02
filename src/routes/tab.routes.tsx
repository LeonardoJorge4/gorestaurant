import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons"

import { Orders } from '../screens/Orders';
import { Listing } from '../screens/Listing';
import { Favorites } from '../screens/Favorites';

import { theme } from '../global/theme';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => (
  <Navigator
    initialRouteName="Listing"
  >
    <Screen
      name="Listing"
      component={Listing}
      options={{
        tabBarItemStyle: {
          flexDirection: 'row',
          alignContent: "center"
        },
        tabBarLabel: "Listagem",
        tabBarLabelStyle: {
          fontFamily: theme.fonts.title,
          fontSize: 12,
          color: theme.colors.red,
        },
        tabBarIcon: () => (
          <Feather
            size={24}
            name="list"
            color={theme.colors.red}
          />
        )
      }}
    />
    <Screen
      name="Orders"
      component={Orders}
      options={{
        tabBarLabel: "Pedidos",
        tabBarLabelStyle: {
          fontFamily: theme.fonts.title,
          fontSize: 12,
          color: theme.colors.red,
        },
        tabBarIcon: () => (
          <Feather
            size={24}
            name="shopping-bag"
            color={theme.colors.red}
          />
        )
      }}
    />
    <Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: "Favoritos",
        tabBarLabelStyle: {
          fontFamily: theme.fonts.title,
          fontSize: 12,
          color: theme.colors.red,
        },
        tabBarIcon: () => (
          <Feather
            size={24}
            name="heart"
            color={theme.colors.red}
          />
        )
      }}
    />
  </Navigator>
)

export default TabRoutes
