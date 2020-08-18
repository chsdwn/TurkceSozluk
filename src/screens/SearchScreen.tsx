import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Box } from '../components/Box';
import { Search } from '../components/Search';

import { LogoIcon } from '../components/icons';

export const SearchScreen = ({ navigation }: any) => {
  return (
    <Box>
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
      <Box p={20}>
        <LogoIcon color="blue" />
      </Box>
      <Box p={10}>
        <Search />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});
