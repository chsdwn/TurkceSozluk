import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { Box } from '../components/Box';
import { Text } from '../components/Text';

import theme from '../theme/theme';

export const DetailsScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(theme.colors.light);
    }, []),
  );

  return (
    <Box as={SafeAreaView} flex={1} bg="light">
      <StatusBar />
      <Text>Details</Text>
    </Box>
  );
};
