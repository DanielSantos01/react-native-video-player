import styled from 'styled-components/native';
import { View } from 'react-native-animatable';

export const Container = styled(View)`
  flex: 1;
  align-items: stretch;
  justify-content: flex-end;
  margin-top: -0.5px;
`;

export const ContentContainer = styled.SafeAreaView`
  alignSelf: stretch;
  paddingLeft: 5px;
  paddingRight: 5px;
`;

export const ScrubberContainer = styled.View`
  alignSelf: stretch;
  alignItems: flex-end;
  paddingLeft: 5px;
  paddingRight: 5px;
  flexDirection: row;
  marginHorizontal: 15px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TimeText = styled.Text`
  font-size: 17px;
  color: white;
`;
