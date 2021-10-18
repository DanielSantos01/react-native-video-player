// define your styles
import { StyleSheet } from 'react-native';

import Fonts from './VideoPlayerComponents/components/Fonts';

export default (Styles = StyleSheet.create({

    /* video setting screen styles. */
    container: {
        flex: 1,
        backgroundColor: 'rgba(25,54,81,0.9)',
        // backgroundColor: 'rgba(0.16,0.31,0.41,0.8)'
    },
    headerView: {
        marginTop: 5,
        justifyContent: 'space-between', flexDirection: 'row',
    },
    innnerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    menuTouch: {
        alignItems: 'center', justifyContent: 'center',
        width: 60, height: 30,
    },
    headerTxt: {
        color: "#ffffff",
        fontSize: Fonts.size.large,
        // fontFamily: Fonts.type.Medium,
        marginBottom: 5
    },
    settingTxt: {
        color: "#ffffff",
        fontSize: Fonts.size.small, marginLeft: 20
    },
    secondView: {
        flex: 1,
        marginTop: 70
    },
    textView: {
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    rowText: {
        color: "#ffffff",
        fontSize: Fonts.size.normal,
        // fontFamily: Fonts.type.Regular,
        marginHorizontal: 25,
        marginVertical: 3
    },
    sepratorView: {
        height: 1,
        backgroundColor: "#ffffff"
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        paddingLeft: 30,
        paddingRight: 30,
        // justifyContent: 'center',
    },
    rowTitleText: {
        //flex: 1,
        color: "#ffffff",
        fontSize: Fonts.size.normal,
        // fontFamily: Fonts.type.Regular,
    },
    selectionView: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        justifyContent: 'center',
    },
    rowTitleTextHeading: {
        color: "#ffffff",
        fontSize: Fonts.size.normal,
        // fontFamily: Fonts.type.Bold,
        flexDirection: 'column'
    },
    radioBtnView: {
        marginLeft: -5,
        marginTop: 5,
    },
    subTitleText: {
        color: "#ffffff",
        fontSize: Fonts.size.normal,
        // fontFamily: Fonts.type.Regular,
        marginLeft: 3
    },
    button: {
        marginLeft: 0
    },
    crossBtnView: {
        marginRight: 30, alignItems: 'flex-end',
    },
}));