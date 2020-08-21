import React, { useCallback, useEffect, useState } from 'react';
import {
  Animated,
  ImageBackground,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import { Box, Card, Search, Text } from '../components';

import { LogoIcon } from '../components/icons';

import { SCREEN_HEIGHT } from '../constants/app';

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
    useCallback(() => {
      StatusBar.setBackgroundColor(
        isSearchFocused ? theme.colors.light : '#e11e3c',
        true,
      );
      StatusBar.setBarStyle(
        isSearchFocused ? 'dark-content' : 'light-content',
        true,
      );
    }, [isSearchFocused]),
  );

  return (
    <Box as={SafeAreaView} flex={1} bg="light">
      <StatusBar backgroundColor={'#e11e3c'} />
      <Box
        as={Animated.View}
        height={SCREEN_HEIGHT + 285}
        width="100%"
        pb={isSearchFocused ? 115 : 400}
        style={{ transform: [{ translateY: screenY }] }}>
        {/* 311 = 285 + 26(padding top) */}
        <Box zIndex={1} position="relative">
          <Box
            as={ImageBackground}
            height={311}
            source={require('../assets/bg.jpg')}>
            <Box flex={1} alignItems="center" justifyContent="center">
              <LogoIcon color="white" />
            </Box>
          </Box>
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
          <Box flex={1} px={16}>
            {isSearchFocused ? (
              <FlatList
                data={[
                  {
                    id: '1',
                    title: 'on para',
                    content: 'çok az (para).',
                  },
                  {
                    id: '2',
                    title: 'siyem siyem ağlamak',
                    content: 'hafif hafif, ince ince, durmadan gözyaşı dökmek.',
                  },
                ]}
                renderItem={({ item }) => (
                  <Card title={item.title} content={item.content} />
                )}></FlatList>
            ) : (
              <>
                <Box mt={40}>
                  <Text pl={16} color="textLight">
                    Bir Deyim
                  </Text>
                  <Card
                    title="on para"
                    content="çok az (para)."
                    onPress={() => navigation.navigate('Details')}
                  />
                </Box>
                <Box mt={40}>
                  <Text pl={16} color="textLight">
                    Bir Deyim - Atasözü
                  </Text>
                  <Card
                    title="siyem siyem ağlamak"
                    content="hafif hafif, ince ince durmadan gözyaşı dökmek."
                    onPress={() => navigation.navigate('Details')}
                  />
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
