import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import WhiteSection from './WhiteSection';
import StyledText from './StyledText';
import colors from '../theme/colors';

export default () => {
  return (
    <WhiteSection>
      <StyledText size="23" color="black" bold>
        11월
      </StyledText>
      <StaticsContainer>
        <View>
          <FlexBox>
            <Label>지출</Label>
            <StyledText color="black" size="20" bold>
              350,000원
            </StyledText>
          </FlexBox>
          <FlexBox>
            <Label>수입</Label>
            <StyledText color="green" size="20" bold>
              500,000원
            </StyledText>
          </FlexBox>
        </View>
        <StaticButton>
          <StyledText color="gray" size="15" bold>
            분석
          </StyledText>
        </StaticButton>
      </StaticsContainer>
    </WhiteSection>
  );
};

const StaticsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const FlexBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  margin-right: 8px;
  font-size: 15px;
  font-weight: 300;
  line-height: 25px;
  color: ${colors.dark};
`;

const StaticButton = styled.Pressable`
  padding: 10px 15px;
  background-color: ${colors.lighter};
  border-radius: 8px;
`;
