import React from 'react';
import { StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import { Box } from '../components/Box';
import { Text } from '../components/Text';

import { IS_ANDROID } from '../constants/app';

export const HistoryScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      IS_ANDROID && StatusBar.setBackgroundColor('white');
    }, []),
  );

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>History</Text>
    </Box>
  );
};
