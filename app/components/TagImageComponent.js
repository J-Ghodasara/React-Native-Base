import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from '../config/colors';
import dimen from '../config/dimen';
import constant from '../config/constant';
import ImageLoad from "react-native-image-placeholder";
import { getImageUri } from '../helper/Util'

export default class TagImageComponent extends React.Component {

    render() {
        return (
            <View style={tagUserStyles.content}>
                {this.createImageList()}
            </View>
        );
    }

    createImageList = () => {
        var userList = this.props.userList

        var count = 0
        var itemCount = 0
        var list = []
        userList.forEach(element => {
            if (element.checked) {
                if (itemCount > 2) {
                    count++
                } else {
                    list.push(
                        <View style={[tagUserStyles.imageCircle, { left: (22 * itemCount) }]}>
                            <ImageLoad
                                loadingStyle={{ size: 'small', color: colors.colorPrimary }}
                                style={tagUserStyles.imageStyle}
                                borderRadius={50}
                                source={getImageUri(element.userDetail.image)}
                                placeholderStyle={tagUserStyles.imageStyle}
                                placeholderSource={constant.completeProfile.userPlaceHolder}
                            />
                        </View>
                    )
                    itemCount++
                }
            }
        });

        if (count > 0) {
            list.push(<View style={[{ left: ((22 * (itemCount + 1)) - 13), justifyContent: 'center', alignContent: 'center', alignItems: 'center' }, tagUserStyles.textContainer,]}>
                <Text style={[tagUserStyles.tagUserText]}>{"+" + count}</Text>
            </View>


            )
        }

        return (
            <View style={{ flexDirection: 'row' }}>
                {list}
            </View>
        )
    }


}


const tagUserStyles = StyleSheet.create({
    blueButtonStyle: {
        height: dimen.value_8_5hp,
        backgroundColor: colors.colorPrimary,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonTextStyle: {
        color: colors.colorWhite,
        fontSize: dimen.fontNormal,
        fontFamily: constant.font.robotoBold
    },
    content: {
        flex: 1,
        marginStart: dimen.marginSmall

    },
    imageCircle: {
        position: 'absolute',
        width: 47,
        height: 47,
        borderRadius: 100 / 2,
        overflow: 'hidden',
        borderColor: colors.colorWhite,
        backgroundColor:colors.colorGray,
        borderWidth: 2
    },
    imageStyle: {
        width: 45,
        height: 45,
        borderRadius: 50,
        position: 'absolute'
    },
    textContainer: {
        width: 45,
        height: 45,
        borderRadius: 50,
        position: 'absolute',
        // backgroundColor: colors.colorWhiteWithOpacity,
    },
    tagUserText: {
        color: colors.colorBlack,
        fontSize: dimen.fontNormal,
        fontFamily: constant.font.robotoBold,

    },
});
