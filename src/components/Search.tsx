import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet } from 'react-native';

import { Box } from './Box';
import { Button } from './Button';
import { Input } from './Input';
import { Text } from './Text';

import { CloseIcon, SearchIcon } from './icons';
import theme from '../theme/theme';

interface IProps {
  onChangeFocus: (status: boolean) => void;
}

export const Search = ({ onChangeFocus }: IProps) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    onChangeFocus(isFocused);
  }, [isFocused, onChangeFocus]);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleClearInput = () => {
    setValue('');
  };

  const handleClearFocus = () => {
    console.log('handleClearFocus');
    Keyboard.dismiss();
    handleClearInput();
    setIsFocused(false);
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          bg="white"
          color="textDark"
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          borderRadius="normal"
          height={52}
          pl={52}
          borderWidth={1}
          borderColor={isFocused ? '#d1d1d1' : 'transparent'}
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
          value={value}
          onChangeText={setValue}
          onFocus={handleOnFocus}
        />
        {value.length > 0 && (
          <Button
            position="absolute"
            right={16}
            top={14}
            onPress={handleClearInput}>
            <CloseIcon color={theme.colors.textDark} />
          </Button>
        )}
        <Button position="absolute" left={16} top={14}>
          <SearchIcon color={theme.colors.textMedium} />
        </Button>
      </Box>
      {isFocused && (
        <Button onPress={handleClearFocus} px={14} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
};
