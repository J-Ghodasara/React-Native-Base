import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import constant from '../config/constant';
import dimen from '../config/dimen';
import color from '../config/colors';


export default  HeaderText = props => {

    return (
        <View style = {style.containerStyle}>
            <Text style={style.textStyle}>{props.header}</Text>
        </View>
    );
}

const style = StyleSheet.create({

    containerStyle : {
        marginTop : 20,
        marginStart: dimen.value_4_5wp,
        marginEnd : dimen.value_5,

    },
    textStyle: {
        fontFamily: constant.font.robotoBold,
        fontSize: dimen.fontSize.textAppearanceHeadline5_24,
        color: color.colorGray
    }

});

