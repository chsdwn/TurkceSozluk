import React from 'react';
import { Text as RNText } from 'react-native';

import styled from 'styled-components/native';
import {
  compose,
  color,
  size,
  space,
  typography,
  ColorProps,
  SizeProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

interface IProps extends ColorProps, SizeProps, SpaceProps, TypographyProps {}

export const Text: React.FC<IProps> = styled(RNText)(
  compose(color, size, space, typography),
);
