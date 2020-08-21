import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import { Box } from '../components/Box';
import { Text } from '../components/Text';

import theme from '../theme/theme';

export const HistoryScreen = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(theme.colors.light);
    }, []),
  );

  return (
    <Box as={SafeAreaView} flex={1} bg="light">
      <Text>History</Text>
    </Box>
  );
};
