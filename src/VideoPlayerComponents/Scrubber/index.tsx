import React, { useCallback } from 'react';
import Slider from '@react-native-community/slider';

import { Container } from './styles';
import { ScrubberProps } from './interfaces';

const Scrubber: React.FC<ScrubberProps> = (props) => {
  const { progress, theme, onSeek, onSeekRelease, duration } = props;

  const handleSeek = useCallback((value: number) => {
    onSeek(value);
  }, [onSeek]);

  const handleSeekRelease = useCallback((value: number) => {
    onSeekRelease(value);
  }, [onSeekRelease]);

  return (
    <Container>
      <Slider
        minimumValue={0}
        maximumValue={duration || 0}
        onValueChange={handleSeek}
        onSlidingComplete={handleSeekRelease}
        value={progress}
        minimumTrackTintColor={theme.scrubberBar}
        thumbTintColor={theme.scrubberBar}
        maximumTrackTintColor={theme.scrubberThumb}
      />
    </Container>
  )
};

export { Scrubber };
