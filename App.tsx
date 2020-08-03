import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { AppNavigator } from './src/navigation/AppNavigator';

import { Box } from './src/components/Box';

import theme from './src/theme/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
};
