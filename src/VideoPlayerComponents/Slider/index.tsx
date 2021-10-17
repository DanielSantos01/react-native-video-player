import React from 'react';

import {  Scrubber, Time } from '..';
import {
  Container,
  ContentContainer,
  TimerContainer,
  ScrubberContainer,
} from './styles';
import { SliderProps } from './interfaces';

const Slider: React.FC<SliderProps> = ({
  containerStyle,
  currentTime,
  duration,
  onSeek,
  onSeekRelease,
}) => {
  return (
    <Container style={containerStyle}>
      <ContentContainer>
        <TimerContainer>
          <Time time={currentTime} completeDuration={duration} />
        </TimerContainer>

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
      </ContentContainer>
    </Container>
  );
};

export { Slider };
