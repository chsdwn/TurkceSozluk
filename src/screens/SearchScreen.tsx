import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Box } from '../components/Box';
import { BoxCenter } from '../components/BoxCenter';
import { Bookmark } from '../components/icons/Bookmark';

export const SearchScreen = ({ navigation }: any) => {
  return (
    <BoxCenter flex={1} justifyContent="center" alignItems="center">
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
      <Box size={20} bg="blue" mt={20} />
      <Bookmark width={50} height={50} />
    </BoxCenter>
  );
};

const styles = StyleSheet.create({});
