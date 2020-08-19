import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailsScreen } from '../screens/DetailsScreen';
import { SearchScreen } from '../screens/SearchScreen';

const Stack = createStackNavigator();

export const SearchNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);
