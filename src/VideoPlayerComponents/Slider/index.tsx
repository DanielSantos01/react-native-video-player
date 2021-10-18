import React from 'react';

import {  Scrubber } from '..';
import {
  Container,
  ContentContainer,
  ScrubberContainer,
  RowContainer,
  TimeText,
} from './styles';
import { SliderProps } from './interfaces';

const Slider: React.FC<SliderProps> = ({
  containerStyle,
  currentTime,
  duration,
  onSeek,
  onSeekRelease,
}) => {
  const addZeros = (time: number): string | number => (time < 10) ? (`0${time}`) : time;

  const getTime = (time: number): string => {
    const secs: number = time % 60;
    const s2: number = (time - secs) / 60;
    const mins: number = s2 % 60;
    const hrs: number = (s2 - mins) / 60;
    const hours: string = addZeros(hrs) > 0 ? `${addZeros(hrs)}:` : '';
    return `${hours}${addZeros(mins)}:${addZeros(secs)}`
  }

  return (
    <Container style={containerStyle}>
      <ContentContainer>
        <ScrubberContainer>
          <Scrubber
            duration={duration}
            onSeek={onSeek}
            onSeekRelease={onSeekRelease}
            progress={currentTime}
            theme={{
              scrubberThumb: '#B0D7E7',
              scrubberBar: '#243539',
            }}
          />
        </ScrubberContainer>

        <RowContainer>
          <TimeText>{getTime(parseInt(currentTime.toString(), 10))}</TimeText>
          <TimeText>{getTime(parseInt(duration.toString(), 10))}</TimeText>
        </RowContainer>
      </ContentContainer>
    </Container>
  );
};

export { Slider };
