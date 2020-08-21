import React, { useState, useEffect } from 'react';
import { Animated, ScrollView, StatusBar, ImageBackground } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import { Box } from '../components/Box';
import { Search } from '../components/Search';
import { Text } from '../components/Text';

import { LogoIcon } from '../components/icons';

import { IS_ANDROID, SCREEN_HEIGHT } from '../constants/app';

import theme from '../theme/theme';

export const SearchScreen = ({ navigation }: any) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [screenY] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isSearchFocused) {
      Animated.timing(screenY, {
        toValue: -286,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(screenY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [screenY, isSearchFocused]);

  useFocusEffect(
    React.useCallback(() => {
      const barStyle = isSearchFocused ? 'dark-content' : 'light-content';
      StatusBar.setBarStyle(barStyle);
      // IS_ANDROID && StatusBar.setBackgroundColor('transparent');
    }, [isSearchFocused]),
  );

  return (
    <Box as={SafeAreaView} flex={1} bg="light">
      <StatusBar
        backgroundColor={
          isSearchFocused
            ? theme.colors.light
            : IS_ANDROID
            ? '#e11e3c'
            : 'transparent'
        }
        barStyle="light-content"
      />
      <Box
        as={Animated.View}
        height={SCREEN_HEIGHT + 285}
        width="100%"
        pb={isSearchFocused ? 115 : 400}
        style={{ transform: [{ translateY: screenY }] }}>
        {/* 311 = 285 + 26(padding top) */}
        <Box zIndex={1} position="relative">
          <ImageBackground
            source={require('../assets/bg.jpg')}
            style={{
              backgroundColor: 'orange',
              height: 311,
            }}>
            <Box flex={1} alignItems="center" justifyContent="center">
              <LogoIcon color="white" />
            </Box>
          </ImageBackground>
        </Box>
        <Box
          position="absolute"
          backgroundColor={isSearchFocused ? 'light' : 'transparent'}
          top={285}
          pl={16}
          pr={16}
          pt={isSearchFocused ? 10 : -16}
          zIndex={1}
          left={0}
          width="100%">
          <Search onChangeFocus={setIsSearchFocused} />
        </Box>
        <Box width="100%" mt={isSearchFocused ? 42 : 32} mb={24} flex={1}>
          {isSearchFocused ? (
            <Box as={ScrollView} flex={1} pl={16} pr={16}>
              <Text>Suggestion</Text>
            </Box>
          ) : (
            <Box as={ScrollView} flex={1} pl={16} pr={16}>
              <Text>History</Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
