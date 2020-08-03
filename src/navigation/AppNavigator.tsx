import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchNavigator } from './SearchNavigator';

import { FavoriteScreen } from '../screens/FavoriteScreen';
import { HistoryScreen } from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="History" component={HistoryScreen} />
    <Tab.Screen name="Search" component={SearchNavigator} />
    <Tab.Screen name="Favorite" component={FavoriteScreen} />
  </Tab.Navigator>
);
