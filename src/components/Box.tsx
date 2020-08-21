import React from 'react';
import { View, ViewProps } from 'react-native';

import styled from 'styled-components/native';
import {
  compose,
  border,
  borderColor,
  borderRadius,
  borderWidth,
  color,
  flexbox,
  height,
  overflow,
  position,
  size,
  space,
  width,
  BorderProps,
  BorderColorProps,
  BorderRadiusProps,
  BorderWidthProps,
  ColorProps,
  FlexboxProps,
  HeightProps,
  OverflowProps,
  PositionProps,
  SizeProps,
  SpaceProps,
  WidthProps,
} from 'styled-system';

export interface BoxProps
  extends ViewProps,
    BorderProps,
    BorderColorProps,
    BorderRadiusProps,
    BorderWidthProps,
    ColorProps,
    FlexboxProps,
    HeightProps,
    OverflowProps,
    PositionProps,
    SizeProps,
    SpaceProps,
    WidthProps {}

export const Box: React.FC<BoxProps> = styled(View)(
  compose(
    borderColor,
    borderRadius,
    borderWidth,
    color,
    height,
    overflow,
    flexbox,
    position,
    size,
    space,
    width,
  ),
);
