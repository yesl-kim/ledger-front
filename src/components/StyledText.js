import React from 'react';
import styled, {css} from 'styled-components/native';
import colors from '../theme/colors';

export default styled.Text`
  color: ${({color}) => colors[color]};
  ${({size}) => css`
    font-size: ${size}px;
    line-height: ${size * 1.5};
  `};
  font-weight: ${({bold}) => (bold ? '700' : '300')};
`;
