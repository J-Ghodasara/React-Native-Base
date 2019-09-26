import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import dimen from '../config/dimen';
import constant from '../config/constant';

const OrangeButton = () => {

  return (


    <View style={buttonStyle.orangeButtonStyle}>
      <Text style={buttonStyle.buttonTextStyle}>Sign Up</Text>
    </View>


  )
}

const buttonStyle = StyleSheet.create({
  orangeButtonStyle: {
    height: dimen.value_8_5hp,
    backgroundColor: colors.colorOrange,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: dimen.marginMedium,
    marginEnd: dimen.marginMedium,
    borderRadius:5


  },
  buttonTextStyle: {
    color: colors.colorWhite,
    fontSize: dimen.fontNormal,
    fontFamily: constant.font.robotoBold
  },
});

export default OrangeButton;