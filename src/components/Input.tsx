import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import styled from 'styled-components/native';
import {
  compose,
  borderColor,
  borderRadius,
  borderWidth,
  color,
  height,
  shadow,
  size,
  space,
  typography,
  BorderColorProps,
  BorderRadiusProps,
  BorderWidthProps,
  ColorProps,
  HeightProps,
  ShadowProps,
  SizeProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import theme from '../theme/theme';

interface IProps
  extends TextInputProps,
    BorderColorProps,
    BorderRadiusProps,
    BorderWidthProps,
    ColorProps,
    HeightProps,
    ShadowProps,
    SizeProps,
    SpaceProps,
    TypographyProps {}

const InputBox: React.FC<IProps> = ({ placeholderTextColor, ...rest }) => (
  <TextInput
    placeholderTextColor={
      placeholderTextColor ? theme.colors[placeholderTextColor] : '#999'
    }
    {...rest}
  />
);

export const Input: React.FC<IProps> = styled(InputBox)(
  compose(
    borderColor,
    borderRadius,
    borderWidth,
    color,
    height,
    shadow,
    size,
    space,
    typography,
  ),
);
