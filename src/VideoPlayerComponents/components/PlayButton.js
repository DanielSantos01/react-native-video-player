import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native'
import AnimatedCircularProgress from '../gradientProgress/index';

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  backward: {
    marginRight: 35,
    height: 50,
    width: 50,
  },
  playButton: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forward: {
    marginLeft: 35,
    height: 50,
    width: 50
  },
  playContainer: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  AndroidView: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

const PlayButton = (props) => {
  const { progress, duration } = props
  return (
    <View style={(Platform.OS === "ios") ? styles.playContainer : styles.AndroidView}>

      <TouchableOpacity onPress={() => props.onPressBackward()} style={styles.backward}>
        <Image
          style={[styles.backward, { marginRight: 0 }]}
          source={require('./images/backward.png')}
          color={props.theme}
          resizeMode='center'
        />
      </TouchableOpacity>

      <View style={{ justifyContent: 'center', alignItems: 'center', height: 120, width: 120 }}>
        {/* {progress == 0 ? null : <AnimatedCircularProgress
          size={120}
          width={10}
          fill={(progress * 100) / duration}
          lineCap={'round'}
          prefill={(progress * 100) / duration}
          backgroundColor="transparent"
          beginColor="#fad055"
          endColor="#f6661e"
          segments={16} />} */}
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute' }} onPress={() => props.onPress()}>
          <Image
            style={{ height: 60, width: 60 }}
            source={props.paused ? require('./images/Play.png') : require('./images/pause.png')}
            color={props.theme}
            resizeMode='center'
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => props.onPressForward()} style={styles.forward}>
        <Image
          style={[styles.forward, { marginLeft: 0 }]}
          source={require('./images/forward.png')}
          color={props.theme}
          resizeMode='center'
        />
      </TouchableOpacity>
    </View>
  )
}

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  onPressBackward: PropTypes.func.isRequired,
  onPressForward: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
}

export { PlayButton }
