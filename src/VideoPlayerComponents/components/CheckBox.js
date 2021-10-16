'use strict';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import {TextPlain, Text} from './RegularComponents';
let CB_ENABLED_IMAGE = require('./images/ic_check.png');
let CB_DISABLED_IMAGE = require('./images/ic_un_check.png');
export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      internalChecked: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    if (this.props.onChange && typeof this.props.checked === 'boolean') {
      this.props.onChange(this.props.checked);
    } else {
      let internalChecked = this.state.internalChecked;

      if (this.props.onChange) {
        this.props.onChange(internalChecked);
      }
      this.setState({
        internalChecked: !internalChecked,
      });
    }
  }

  render() {
    let container = (
      <View style={this.props.containerStyle || Styles.checkboxField}>
        <Image
          style={this.props.checkboxStyle || Styles.checkboxImg}
          source={source}
        />
        <View style={Styles.labelContainer}>
          <Text style={[Styles.label, this.props.labelStyle]}>
            {this.props.label}
          </Text>
        </View>
      </View>
    );

    let source;

    if (typeof this.props.checked === 'boolean') {
      source = this.props.checked
        ? this.props.checkedImage
        : this.props.uncheckedImage;
    } else {
      source = this.state.internalChecked
        ? this.props.checkedImage
        : this.props.uncheckedImage;
    }

    if (this.props.labelBefore) {
      container = (
        <View
          style={
            this.props.containerStyle || [
              Styles.checkboxField,
              Styles.flexContainer,
            ]
          }>
          <View style={[Styles.labelContainer, this.props.labelContainerStyle]}>
            <Text
              numberOfLines={this.props.labelLines}
              style={[Styles.label, this.props.labelStyle]}>
              {this.props.label}
            </Text>
          </View>
          <Image
            resizeMode="contain"
            style={[Styles.checkboxImg, this.props.checkboxStyle]}
            source={source}
          />
        </View>
      );
    } else if (this.props.label === '') {
      container = (
        <View style={[Styles.checkboxField, this.props.containerStyle]}>
          <Image
            resizeMode="contain"
            style={[Styles.checkboxImg, this.props.checkboxStyle]}
            source={source}
          />
        </View>
      );
    } else {
      container = (
        <View style={[Styles.checkboxField, this.props.containerStyle]}>
          <Image
            resizeMode="contain"
            style={[Styles.checkboxImg, this.props.checkboxStyle]}
            source={source}
          />
          <View style={Styles.labelContainer}>
            {this.props.label == 'hide' ? null : (
              <Text
                numberOfLines={this.props.labelLines}
                style={[Styles.label, this.props.labelStyle]}>
                {this.props.label}
              </Text>
            )}
            {/* )} */}

            {this.props.renderComponent}
          </View>
        </View>
      );
    }

    return (
      <TouchableOpacity
        disabled={this.props.isDisable}
        onPress={this.onChange}
        underlayColor={this.props.underlayColor}
        style={Styles.flexContainer}>
        {container}
      </TouchableOpacity>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string,
  labelBefore: PropTypes.bool,
  labelStyle: PropTypes.any,
  labelContainerStyle: PropTypes.any,
  labelLines: PropTypes.number,
  checkboxStyle: PropTypes.any,
  containerStyle: PropTypes.any,
  checked: PropTypes.bool,
  checkedImage: PropTypes.number,
  uncheckedImage: PropTypes.number,
  underlayColor: PropTypes.string,
  onChange: PropTypes.func,
  isDisable: PropTypes.any,
};

CheckBox.defaultProps = {
  label: 'Label',
  labelLines: 1,
  labelBefore: false,
  checked: null,
  checkedImage: CB_ENABLED_IMAGE,
  uncheckedImage: CB_DISABLED_IMAGE,
  underlayColor: 'white',
  isDisable: false,
};

const Styles = StyleSheet.create({
  flexContainer: {
    // flex: 1,
    marginRight: 10
  },
  checkboxField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxImg: {
    width: 15,
    height: 15,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
    marginRight: 10,
  },
});
