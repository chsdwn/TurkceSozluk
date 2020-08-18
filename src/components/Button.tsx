import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  flexbox,
  color,
  position,
  size,
  space,
  layout,
  borderRadius,
} from 'styled-system';

export const Button = styled(TouchableOpacity)(
  compose(flexbox, space, color, position, size, layout, borderRadius),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};
