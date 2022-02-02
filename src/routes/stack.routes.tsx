import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Initial } from '../screens/Initial';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => (
  <Navigator>
    <Screen
      name="Initial"
      component={Initial}
    />
  </Navigator>
)

export default StackRoutes