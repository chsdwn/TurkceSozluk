import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

export const SearchScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Search</Text>
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

const styles = StyleSheet.create({});
