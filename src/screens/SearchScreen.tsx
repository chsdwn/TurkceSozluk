import React, { useState } from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import { Box } from '../components/Box';
import { Search } from '../components/Search';

import { LogoIcon } from '../components/icons';

import { IS_ANDROID } from '../constants/app';

export const SearchScreen = ({ navigation }: any) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      IS_ANDROID && StatusBar.setBackgroundColor('#e11e3c');
    }, []),
  );

  return (
    <Box as={SafeAreaView} flex={1}>
      <StatusBar
        backgroundColor={IS_ANDROID ? '#e11e3c' : 'transparent'}
        barStyle="light-content"
      />
      <Box position="relative" zIndex={1} style={{ elevation: 1 }}>
        <Box
          as={ImageBackground}
          source={require('../assets/bg.jpg')}
          style={{ width: '100%', height: isSearchFocused ? 1 : 285 }}
          position="relative">
          <Box flex={1} alignItems="center" justifyContent="center">
            <LogoIcon color="white" />
          </Box>
          <Box p={16} width="100%" mb={-42}>
            <Search onChangeFocus={(status) => setIsSearchFocused(status)} />
          </Box>
        </Box>
      </Box>
      <Box flex={1} bg="light" pt={26}>
        <Box flex={1} p={30}></Box>
      </Box>
    </Box>
  );
};
