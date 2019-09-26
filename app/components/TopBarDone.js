import React from 'react';
import {  Text, TouchableOpacity } from 'react-native'
import dimen from '../config/dimen';
import colors from '../config/colors';
import string from '../config/string';
import CreatePost from '../screen/CreatePost/CreatePost';
import constant from '../config/constant'

export default class TopBarDone extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={() => {
                CreatePost.nextClick()
             }}>
                <Text style={{
                    alignSelf: 'flex-end',
                    marginEnd: dimen.marginMedium,
                    color :colors.colorWhite,
                    fontFamily: constant.font.muliBold,
                }}>
                    {string.label_next}
                </Text>
            </TouchableOpacity>
        );
    }
    
}