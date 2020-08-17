import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { BoxCenter } from '../components/BoxCenter';

import { Logo } from '../components/icons';

export const SearchScreen = ({ navigation }: any) => {
  return (
    <BoxCenter
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="proverbsLight">
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
      <Logo width={120} color="red" />
    </BoxCenter>
  );
};

const styles = StyleSheet.create({});
