import React from 'react';
import { View, Text } from 'react-native';
import { Button } from './Button';

import { Box } from './Box';

import { Bookmark, History, Search } from './icons';

import theme from '../theme/theme';

export const MyTabBar = ({ state, descriptors, navigation }: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box key={label} p={15} mt={-15} bg="white" borderRadius="full">
            <Button size={56} onPress={onPress} bg="red" borderRadius="full">
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            flex={1}
            height={56}
            pt={6}
            flexDirection="column"
            onPress={onPress}>
            {label === 'History' && <History stroke={theme.colors.gray} />}
            {label === 'Favorite' && <Bookmark stroke={theme.colors.gray} />}
            <Box size={3} bg={isFocused ? 'red' : 'transparent'} mt={6} />
          </Button>
        );
      })}
    </View>
  );
};
