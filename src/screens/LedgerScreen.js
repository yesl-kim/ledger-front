import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styled, {css} from 'styled-components/native';
import Colors from '../theme/colors';

import StyledText from '../components/StyledText';
import LedgerHeader from '../components/LedgerHeader';
import LedgerItem from '../components/LedgerItem';
import LedgerList from '../components/LedgerList';

export default () => {
  return (
    <Container>
      <LedgerHeader />
      <LedgerList />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${Colors.lighter};
`;
