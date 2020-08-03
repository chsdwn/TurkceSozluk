import React from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components';
import { compose, color, flexbox, size, space } from 'styled-system';

export const Box = styled(View)(compose(color, flexbox, size, space));
