import styled from 'styled-components/native';
import { View } from 'react-native-animatable';

export const Container = styled(View)`
  flex: 1;
  align-items: stretch;
  justify-content: flex-end;
`;

export const ContentContainer = styled.SafeAreaView`
  alignSelf: stretch;
  paddingLeft: 5px;
  paddingRight: 5px;
`;

export const TimerContainer = styled.View`
  width: 100%;
`;

export const ScrubberContainer = styled.View`
  alignSelf: stretch;
  alignItems: flex-end;
  paddingLeft: 5px;
  paddingRight: 5px;
  flexDirection: row;
  marginHorizontal: 15px;
`;
