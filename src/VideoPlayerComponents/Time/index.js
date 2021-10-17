import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, Animated, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    color: 'white',
    fontSize: 17
  }
})

class Time extends Component {

  constructor(props) {
    super(props)

    this.ball = new Animated.Value(0)
    Animated.timing(this.ball, {
      toValue: 1,
      duration: this.props.time,
      useNativeDriver: true
    }).start()

  }

  getTime(time) {
    // format the seconds saved into 00:00:00
    const secs = time % 60
    const s2 = (time - secs) / 60
    const mins = s2 % 60
    const hrs = (s2 - mins) / 60
    const hours = this.addZeros(hrs) > 0 ? `${this.addZeros(hrs)}:` : ''
    return `${hours}${this.addZeros(mins)}:${this.addZeros(secs)}`
  }

  addZeros(time) {
    return (time < 10) ? (`0${time}`) : time
  }

  render() {

    const animStyle = {
      transform: [{
        //for reference of calculation
        // translateX: (15 + 5  + 11) + this.props.time * (Dimensions.get('window').width - 40 - 33) / (this.props.completeDuration > 0 ? this.props.completeDuration : 1) - 40
        translateX: (this.props.time * (Dimensions.get('window').width - 73) / (this.props.completeDuration > 0 ? this.props.completeDuration : 1)) - 9
      }]
    }
    return (
      <Animated.View style={[animStyle, { width: 80, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={styles.text}>{this.getTime(parseInt(this.props.time, 10))}</Text>
      </Animated.View>
    )
  }
}

Time.propTypes = {
  time: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  completeDuration: PropTypes.number.isRequired,
}

export { Time }
