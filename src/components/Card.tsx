import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Box, Text } from './index';

import { BoxProps } from './Box';

interface IProps extends BoxProps {
  title?: string;
  content?: string;
  description?: string;
  onPress?: () => void;
}

export const Card: React.FC<IProps> = ({
  title,
  content,
  description,
  onPress = () => {},
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box py={16} px={12} borderRadius="normal" bg="white" mt={10} {...rest}>
        <Box borderLeftWidth={3} borderLeftColor="#e8eaed" pl={12}>
          <Text fontSize={18} fontWeight="bold" color="textDark">
            {title}
          </Text>
          <Text fontSize={14} mt={8} color="textMedium">
            {content}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
