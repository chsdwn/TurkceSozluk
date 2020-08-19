import styled from 'styled-components/native';

import { Box } from './Box';

export const BoxCenter: typeof Box = styled(Box)({});

BoxCenter.defaultProps = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
