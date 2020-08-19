import React from 'react';
import { View, ViewProps } from 'react-native';

import styled from 'styled-components/native';
import {
  compose,
  borderRadius,
  color,
  flexbox,
  position,
  size,
  space,
  width,
  BorderRadiusProps,
  ColorProps,
  FlexboxProps,
  PositionProps,
  SizeProps,
  SpaceProps,
  WidthProps,
} from 'styled-system';

interface IProps
  extends ViewProps,
    BorderRadiusProps,
    ColorProps,
    FlexboxProps,
    PositionProps,
    SizeProps,
    SpaceProps,
    WidthProps {}

export const Box: React.FC<IProps> = styled(View)(
  compose(borderRadius, color, flexbox, position, size, space, width),
);
