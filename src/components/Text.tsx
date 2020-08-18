import React from 'react';
import { Text as RNText } from 'react-native';

import styled from 'styled-components';
import { compose, color, size, space, typography } from 'styled-system';

export const Text = styled(RNText)(compose(color, size, space, typography));
