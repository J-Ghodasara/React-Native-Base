import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IcLeftArrow from '../assets/image/ic_left_arrow.svg'
import SettingStyle from '../screen/Setting/Style/SettingStyle';
import string from '../config/string';
import { withNavigation } from 'react-navigation';


const SettingComponent = (props) => {
    onClickItem = (item) => {
        switch (item) {
            case string.label_facebook_setting: {
                props.navigation.navigate('Facebook', { index: 1, fromSettings: true })
                break;
            }
            case string.label_contact: {
                props.navigation.navigate('Facebook', { index: 0, fromSettings: true })
                break;
            }
            case string.label_nearBy: {
                props.navigation.navigate('Facebook', { index: 2, fromSettings: true })
                break;
            }
            case string.label_viewd: {
                props.navigation.navigate('UserList', { tag: "viewed" })
                break;
            }
            case string.label_privacy : {
                props.navigation.navigate('TermsAndPrivacy', { tag: "privacypolicy",title:"Privacy Policy" });
                break;
            }
            case string.label_termsAndConditions : {
                props.navigation.navigate('TermsAndPrivacy', { tag: "terms",title:"Terms & Conditions" });
                break;
            }
        }
    }

    return (
        <TouchableOpacity onPress={() => {
            this.onClickItem(props.item.name)
        }}>
            <View style={{ flexDirection: 'column' }}>
                <View style={SettingStyle.viewStyle}>
                    <Text style={SettingStyle.textLableStyle}>{props.item.name}</Text>
                    <IcLeftArrow style={SettingStyle.arrowStyle} />
                </View>
                <View style={SettingStyle.dividerStyle} />
            </View>
        </TouchableOpacity>
    )


}

export default withNavigation(SettingComponent);