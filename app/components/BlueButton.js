import React from "react";
import { Text, View ,StyleSheet} from "react-native";
import colors from '../config/colors';
import dimen from '../config/dimen';
import constant from '../config/constant';

const BlueButton = props => {
  return (
    <View style={buttonStyle.blueButtonStyle}>
      <Text style={buttonStyle.buttonTextStyle}>{props.title}</Text>
    </View>
  );
};

const buttonStyle  = StyleSheet.create({
  blueButtonStyle : {
    height:dimen.value_8_5hp,
    backgroundColor:colors.colorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5
    
  },
  buttonTextStyle : {
    color:colors.colorWhite,
    fontSize:dimen.fontNormal,
    fontFamily:constant.font.robotoBold
  },
});
export default BlueButton;
