import React from 'react';
import {Pressable, View} from 'react-native';
import styled from 'styled-components/native';

import WhiteSection from './WhiteSection';
import StyledText from './StyledText';
import LedgerItem from './LedgerItem';
import colors from '../theme/colors';

export default () => {
  return (
    <WhiteSection>
      <Aside>
        <Pressable>
          <StyledText size="13" color="black">
            전체 내역
          </StyledText>
        </Pressable>
        <Pressable>
          <StyledText size="12" color="black">
            + 내역 추가
          </StyledText>
        </Pressable>
      </Aside>
      <List>
        {/* 내역 */}
        <LedgerDate>
          <StyledText size="14" color="light">
            13일 오늘
          </StyledText>
          <StyledText size="13" color="black">
            -11,100원
          </StyledText>
        </LedgerDate>
        <LedgerItem />
      </List>
    </WhiteSection>
  );
};

const Aside = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const List = styled.View`
  padding-bottom: 30px;
`;

const LedgerDate = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.lighter};
`;
