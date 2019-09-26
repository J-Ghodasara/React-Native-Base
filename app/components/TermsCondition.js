import React, { Component } from 'react';
import { View, Text } from 'react-native';
import string from '../config/string';
import colors from '../config/colors';
import dimen from '../config/dimen'
import registerStyle from '../screen/Register/styles/RegisterStyle';
import { withNavigation } from 'react-navigation';
import * as commanAction from '../redux/actions/CommanActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveAsyncData, getAsyncData, removeAsyncData } from '../helper/AsyncStorageUtil';
import constant from '../config/constant';
class TermsCondition extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <View style={{ alignItems: 'center', marginBottom: 16,marginTop:10 }}>
                <Text style={registerStyle.textForgotPassword}>
                    {string.label_signup_terms}
                </Text>

                <Text >
                    <Text onPress={() => {
                        {
                            saveAsyncData(constant.keyAllConstant.termsAndConditions,
                                "terms");
                            this.props.navigation.navigate('TermsAndPrivacy', { tag: "terms",title:"Terms & Conditions" });
                        }
                    }} style={registerStyle.textTermsAndPrivacy}>
                        {string.label_terms}
                    </Text>
                    <Text style={{ color: colors.colorLightGray }}>
                        and
            <Text onPress={() => {
                            {
                                saveAsyncData(constant.keyAllConstant.termsAndConditions,
                                    "privacypolicy");
                                this.props.navigation.navigate('TermsAndPrivacy', { tag: "privacypolicy",title:"Privacy Policy" });
                            }
                        }} style={registerStyle.textTermsAndPrivacy}>
                            {string.label_privacyPolicy}
                        </Text>
                    </Text>
                </Text>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        commanAction: bindActionCreators(commanAction, dispatch)
    };
};
export default withNavigation(connect(null, mapDispatchToProps)(TermsCondition));

