//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import Styles from './Styles';
import ToggleSwitch from './VideoPlayerComponents/components/Switch';
import CheckBox from './VideoPlayerComponents/components/CheckBox';
import PropTypes from 'prop-types';
import Fonts from './VideoPlayerComponents/components/Fonts';

// create a component
class VideoSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qualityArray: this.props.qualityArray || ['320p', '480p', '720p', '180p'],
      autoConnectionStatus: true,
      boxSelected: this.props.boxSelected || null,
      rotationText: '',
      rotationIndex: 1,
      rotationStatus: false,
      isScreenRotation: false,
      currentOreintation: '',
      infoAlert: false,
      infoAlertMesg: '',
      infoKey: '',
      apiCalled: false,
      isLoading: false,
      changeQuality: '',
      changeOrientation: '',
    };
  }

  /* Life cycles methods. */
  componentDidMount() {
    this.getOrientation();
    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }

  getOrientation = () => {
    if (this.refs.rootView) {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({ currentOreintation: 'portrait' });
        
      } else {
        this.setState({ currentOreintation: 'landscape' });

      }
    }
  };

  renderOptions = () => {
    return this.state.qualityArray.map((item, index) => {
      return (
        <View style={Styles.rowView}>
          <CheckBox
            style={{}}
            onChange={() => {
        
              this.props.IsQualityArray
                ? this.props.IsQualityArray(item, index)
                : [this.setState({ boxSelected: index }), this.setState({ autoConnectionStatus: false })]
            }}
            checked={this.state.boxSelected == index ? true : false}
            label={'hide'}
          />
          <View style={{ marginRight: 20 }}>
            <Text style={[Styles.rowTitleText, {}]}>{item}</Text>
          </View>
        </View>
      );
    });
  };

  render() {
    /** Modal screen for portrait **/
    return this.state.isScreenRotation == false ? (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.isOpen}
        supportedOrientations={[
          'portrait',
          'landscape',
          'portrait-upside-down',
          'landscape-left',
          'landscape-right',
        ]}
        onRequestClose={() => {
          this.props.onVideoSettingsClose(
            false,
            this.state.changeOrientation,
            this.state.changeQuality,
          );
        }}>
        <SafeAreaView ref="rootView" style={Styles.container}>
          <StatusBar
            hidden={false}
            translucent={true}
            backgroundColor={'rgba(25,54,81,0.9)'}
          />
          <ScrollView style={{ flex: 1 }}>
            {/* ============= Info popup ============== */}

            <View style={Styles.headerView}>
              <View style={Styles.innnerHeader}>
                <Text style={Styles.headerTxt}>Media Quality</Text>
              </View>
              <View style={Styles.crossBtnView}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.onVideoSettingsClose(
                      false,
                      this.state.changeOrientation,
                      this.state.changeQuality,
                    );
                  }}
                  hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}>
                  <Image
                    source={require('./VideoPlayerComponents/components/images/Close.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>

            {/* ============= Auto based connection view ============== */}
            <View style={Styles.secondView}>
              <View style={[Styles.rowView, { marginTop: 5 }]}>
                <ToggleSwitch
                  value={
                    this.state.autoConnectionStatus ||
                    this.props.autoConnectionStatus
                  }
                  onValueChange={() => {

                    this.props.IsAutoConnectionStatus
                      ? this.props.IsAutoConnectionStatus()
                      : [ this.setState({ boxSelected: null }),this.setState({
                        autoConnectionStatus: !this.state
                          .autoConnectionStatus,
                      })]
                  }}
                />
                <Text
                  style={[
                    Styles.rowTitleText,
                    {
                      flex: 1,
                      marginLeft: 10,
                      fontSize: Fonts.size.normal,
                      // fontFamily: Fonts.type.Bold,
                    },
                  ]}>
                  Auto based on your connection
                </Text>
              </View>

              {/* ============= Different video resolution view ============== */}
              <View style={Styles.textView}>
                <Text style={Styles.rowText}>
                  If you are having connection issues, you can force the app to
                  always display videos in these resolutions.
                </Text>
              </View>
              {this.renderOptions()}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    ) : (
        this.renderElement()
      );
  }

  renderLandscapeOption = () => {
    return this.state.qualityArray.map(() => {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View
            style={[
              Styles.rowView,
              { marginTop: 0, paddingLeft: 25, paddingRight: 25 },
            ]}>
            <CheckBox
              style={{ marginRight: 5 }}
              onChange={() => {
                this.props.IsQualityArray
                  ? this.props.IsQualityArray(item, index)
                  : [this.setState({ boxSelected: index }),this.setState({ autoConnectionStatus: false })]
              }}
              checked={this.state.boxSelected == index ? true : false}
              label={'hide'}
            />
            <Text style={[Styles.rowTitleText, { flex: 1 }]}>{item}</Text>
          </View>
        </View>
      );
    });
  };
  /** Modal screen for landscape **/
  renderElement() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.isOpen}
        supportedOrientations={[
          'portrait',
          'landscape',
          'portrait-upside-down',
          'landscape-left',
          'landscape-right',
        ]}
        onRequestClose={() => {
          this.props.onVideoSettingsClose(
            false,
            this.state.changeOrientation,
            this.state.changeQuality,
          );
        }}>
        <SafeAreaView ref="rootView" style={Styles.container}>
          <StatusBar
            hidden={false}
            translucent={true}
            backgroundColor={'rgba(25,54,81,0.9)'}
          />
          // <Loader loading={this.state.isLoading} />
          //{' '}
          <ScrollView style={{ flex: 1 }}>
            {/* ============= Header View ============== */}
            <View style={[Styles.headerView, { marginTop: 20 }]}>
              <View style={[Styles.innnerHeader, { marginLeft: 25 }]}>
                <Text style={Styles.headerTxt}>Media Quality</Text>
              </View>
              <View style={[Styles.crossBtnView, { marginRight: 25 }]}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.onVideoSettingsClose(
                      false,
                      this.state.changeOrientation,
                      this.state.changeQuality,
                    );
                  }}
                  hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}>
                  <Image
                    source={require('./VideoPlayerComponents/components/images/Close.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>

            {/* ============= Auto connection ============== */}
            <View style={[Styles.secondView, { marginTop: 20 }]}>
              <View
                style={[
                  Styles.rowView,
                  { marginTop: 5, paddingLeft: 25, paddingRight: 25 },
                ]}>
                <ToggleSwitch
                  value={
                    this.state.autoConnectionStatus ||
                    this.props.autoConnectionStatus
                  }
                  onValueChange={() => {
                    this.setState({ boxSelected: null })
                    this.props.IsAutoConnectionStatus
                      ? this.props.IsAutoConnectionStatus()
                      : this.setState({
                        autoConnectionStatus: !this.state
                          .autoConnectionStatus,
                      });
                  }}
                />
                <Text
                  style={[
                    Styles.rowTitleText,
                    {
                      flex: 1,
                      marginLeft: 10,
                      fontSize: Fonts.size.normal,
                      // fontFamily: Fonts.type.Bold,
                    },
                  ]}>
                  Auto based on your connection
                </Text>
              </View>

              <View style={[Styles.textView, { marginTop: 10 }]}>
                <Text style={[Styles.rowText, { marginHorizontal: 25 }]}>
                  If you are having connection issues, you can force the app to
                  always display videos in these resolutions
                </Text>
              </View>

              {this.renderLandscapeOption()}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
  }
}

VideoSettings.propTypes = {
  isOpen: PropTypes.bool,
  openFromVideo: PropTypes.string,
};

export default VideoSettings;
