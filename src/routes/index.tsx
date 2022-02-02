import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Routes = () => (
  <NavigationContainer>
    <TabRoutes />
  </NavigationContainer>
)

export default Routes