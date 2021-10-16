import React from 'react' // eslint-disable-line
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import Slider from '../Slider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  slider: {
    marginHorizontal: -10
  },
  thumbStyle: {
    width: 22,
    height: 22,
    borderRadius: 22 / 2,
    backgroundColor: 'rgba(247,109,28,1)',
    borderColor: 'white',
    borderWidth: 3,
  },
  trackStyle: {
    borderRadius: 1
  }
})

const Scrubber = (props) => {
  const trackColor = 'transparent'
  const { progress, theme, onSeek, onSeekRelease, duration, back, next, isRepeat, isShuffle,
    isAutoPlay, repeat, shuffle, autoPlayFunc, isSplashScreen } = props
  return (
    <View style={styles.container}>
      <Slider
        onValueChange={val => onSeek(val)}
        onSlidingComplete={val => onSeekRelease(val)}
        value={progress === Number.POSITIVE_INFINITY ? 0 : progress}
        thumbStyle={styles.thumbStyle}
        trackStyle={styles.trackStyle}
        minimumTrackTintColor={theme.scrubberBar}
        maximumTrackTintColor={trackColor}
        trackClickable
      />
    </View>
  )
}

Scrubber.propTypes = {
  onSeek: PropTypes.func.isRequired,
  onSeekRelease: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  isRepeat: PropTypes.bool.isRequired,
  isShuffle: PropTypes.bool.isRequired,
  isAutoPlay: PropTypes.bool.isRequired,
  repeat: PropTypes.func.isRequired,
  shuffle: PropTypes.func.isRequired,
  autoPlayFunc: PropTypes.func.isRequired,
  isSplashScreen: PropTypes.bool
}

export { Scrubber }
