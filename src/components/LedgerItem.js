import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import StyledText from './StyledText';

export default () => {
  return (
    <Container>
      <Pressable style={styles.category}>
        <Text style={styles.categoryLabel}>☕️</Text>
      </Pressable>
      <View>
        <StyledText size="14" color="black">
          투썸플레이스
        </StyledText>
        <StyledText size="13" color="gray">
          커피/음료 | S20 (체크)
        </StyledText>
      </View>
      <Value>
        <StyledText size="15" color="black" bold>
          -11,100원
        </StyledText>
      </Value>
    </Container>
  );
};

const Container = styled.Pressable`
  margin-top: 15px;
  flex-direction: row;
`;

const Value = styled.View`
  margin-left: auto;
`;

const styles = StyleSheet.create({
  category: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#E1F2FB',
  },
  categoryLabel: {textAlign: 'center', lineHeight: 37, fontSize: 20},
});
