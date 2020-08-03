import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchNavigator } from './SearchNavigator';

import { FavoriteScreen } from '../screens/FavoriteScreen';
import { HistoryScreen } from '../screens/HistoryScreen';

import { MyTabBar } from '../components/MyTabBar';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="Search"
    tabBar={(props) => <MyTabBar {...props} />}>
    <Tab.Screen name="History" component={HistoryScreen} />
    <Tab.Screen name="Search" component={SearchNavigator} />
    <Tab.Screen name="Favorite" component={FavoriteScreen} />
  </Tab.Navigator>
);
