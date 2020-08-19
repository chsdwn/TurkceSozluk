import React from 'react';

import { Box } from './Box';
import { Button } from './Button';

import { BookmarkIcon, HistoryIcon, SearchIcon } from './icons';

import theme from '../theme/theme';

import { IS_IOS } from '../constants/app';

export const MyTabBar = ({ state, descriptors, navigation }: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Box
      pb={IS_IOS ? 20 : undefined}
      flexDirection="row"
      bg="white"
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
      }}>
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
              <SearchIcon stroke="white" />
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
            {label === 'History' && (
              <HistoryIcon
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label === 'Favorite' && (
              <BookmarkIcon
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Box
              size={4}
              bg={isFocused ? 'red' : 'transparent'}
              mt={6}
              borderRadius={2}
            />
          </Button>
        );
      })}
    </Box>
  );
};
