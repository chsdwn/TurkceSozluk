import React from 'react';
import { TextInput } from 'react-native';

import styled from 'styled-components';
import {
  borderRadius,
  color,
  compose,
  shadow,
  size,
  space,
  typography,
} from 'styled-system';
import theme from '../theme/theme';

interface IProps {
  placeholderTextColor?: string;
}

export const Input = styled(TextInput).attrs(
  ({ placeholderTextColor }: IProps) => ({
    placeholderTextColor: theme.colors[placeholderTextColor] || '#999',
  }),
)(compose(borderRadius, color, shadow, size, space, typography));
