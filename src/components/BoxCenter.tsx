import styled from 'styled-components';

import { Box } from './Box';

export const BoxCenter = styled(Box)({});

BoxCenter.defaultProps = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
