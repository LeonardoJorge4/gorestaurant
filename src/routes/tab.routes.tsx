import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Orders } from '../screens/Orders';
import { Listing } from '../screens/Listing';
import { Favorites } from '../screens/Favorites';

import { Header } from '../components/Header';
import { OptionTabNavigator } from '../components/OptionTabNavigator';
import { Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get("window")
const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => (
  <View style={{
    width,
    height,
  }}>
    <Navigator
      initialRouteName="Listing"
      // screenOptions={{
      //   tabBarHideOnKeyboard: true,
      // }}
    >
      <Screen
        name="Listing"
        component={Listing}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <OptionTabNavigator 
              icon="list"
              title="Listagem"
              focused={focused}
            />
          )
        }}
      />

      <Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <OptionTabNavigator 
            title="Pedidos"
            icon="shopping-bag"
              focused={focused}
            />
          )
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{ 
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <OptionTabNavigator 
              title="Favoritos"
              icon="heart"
              focused={focused}
            />
          )
        }}
      />
    </Navigator>
  </View>
)

export default TabRoutes
