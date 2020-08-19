import { TouchableOpacity, ButtonProps } from 'react-native';
import styled from 'styled-components/native';
import {
  compose,
  borderRadius,
  color,
  flexbox,
  layout,
  position,
  size,
  space,
  BorderRadiusProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SizeProps,
  SpaceProps,
} from 'styled-system';

interface IProps
  extends ButtonProps,
    BorderRadiusProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SizeProps,
    SpaceProps {
  title?: string;
  onPress?: () => void;
}

export const Button: React.FC<IProps> = styled(TouchableOpacity)(
  compose(flexbox, space, color, position, size, layout, borderRadius),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};
