import React, { useState, useEffect } from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import { Box } from '../components/Box';
import { Search } from '../components/Search';
import { Text } from '../components/Text';

import { LogoIcon } from '../components/icons';

import { IS_ANDROID, SCREEN_HEIGHT } from '../constants/app';

export const SearchScreen = ({ navigation }: any) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [screenY] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isSearchFocused) {
      Animated.timing(screenY, {
        toValue: -285,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(screenY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [screenY, isSearchFocused]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      IS_ANDROID && StatusBar.setBackgroundColor('#e11e3c');
    }, []),
  );

  return (
    <Box as={SafeAreaView} flex={1} bg="light">
      <StatusBar
        backgroundColor={IS_ANDROID ? '#e11e3c' : 'transparent'}
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
          pt={-16}
          zIndex={1}
          left={0}
          width="100%">
          <Search onChangeFocus={setIsSearchFocused} />
        </Box>
        <Box width="100%" mt={32} mb={24} flex={1}>
          <Box as={ScrollView} flex={1} pl={16} pr={16}>
            <Text color="textDark">Container</Text>
            <Text color="textDark">Container2</Text>
            <Text color="textDark">Container3</Text>
            <Text color="textDark">Container4</Text>
            <Text color="textDark">Container5</Text>
            <Text color="textDark">Container6</Text>
            <Text color="textDark">Container7</Text>
            <Text color="textDark">Container8</Text>
            <Text color="textDark">-----------------</Text>
            <Text color="textDark">Container</Text>
            <Text color="textDark">Container2</Text>
            <Text color="textDark">Container3</Text>
            <Text color="textDark">Container4</Text>
            <Text color="textDark">Container5</Text>
            <Text color="textDark">Container6</Text>
            <Text color="textDark">Container7</Text>
            <Text color="textDark">Container8</Text>
            <Text color="textDark">-----------------</Text>
            <Text color="textDark">Container</Text>
            <Text color="textDark">Container2</Text>
            <Text color="textDark">Container3</Text>
            <Text color="textDark">Container4</Text>
            <Text color="textDark">Container5</Text>
            <Text color="textDark">Container6</Text>
            <Text color="textDark">Container7</Text>
            <Text color="textDark">Container8</Text>
            <Text color="textDark">-----------------</Text>
            <Text color="textDark">Container</Text>
            <Text color="textDark">Container2</Text>
            <Text color="textDark">Container3</Text>
            <Text color="textDark">Container4</Text>
            <Text color="textDark">Container5</Text>
            <Text color="textDark">Container6</Text>
            <Text color="textDark">Container7</Text>
            <Text color="textDark">Container8</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
