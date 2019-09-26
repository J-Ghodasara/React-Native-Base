import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
    LoginManager
    , AccessToken
    , GraphRequestManager
    , GraphRequest
} from 'react-native-fbsdk';
import string from '../config/string'
import constant from '../config/constant';
import colors from '../config/colors';
import dimen from '../config/dimen';
import * as commanAction from '../redux/actions/CommanActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import userService from '../services/User/UserService'
import { saveAsyncData } from '../helper/AsyncStorageUtil';
import { withNavigation } from 'react-navigation';
import DeviceInfo from 'react-native-device-info';
import { OpenOkDialog, OpenOkCancelDialog} from '../components/AlertDialog';
import RNLocation from "react-native-location";
import NetworkUtil from '../helper/NetworkUtil';

class FacebookButton extends Component {
    buttonPressed = false;
    constructor(props) {
        super(props);
    }


    callLoginApi = (result, accessToken, isForce = false) => {
        const requestBody = {
            username: result.name,
            socialId: result.id,
            socialToken: accessToken,
            deviceId: DeviceInfo.getUniqueID(),
            forceLogin: isForce,

        }
        userService
            .loginUser(constant.api.LoginApi, requestBody)
            .then(async (response) => {

                if (response && 'errorCode' in response && response.errorCode === 4003) {
                    OpenOkCancelDialog(response.message, string.alert.buttonYes, string.alert.butttonNo, () => {
                        this.callLoginApi(result, accessToken, true)
                    }, () => {
                    })
                } else {
                    if (response.status === 203) {
                        this.props.navigation.navigate('CompleteProfile', { isNormalSignup: false, fbData: result, token: accessToken })

                    } else {
                        this.saveData(response.result)
                        var locationPermissionGranted = await RNLocation.checkPermission({
                            ios: "whenInUse", 
                            android: {
                                detail: "coarse" 
                            }
                        }).then(async (granted) => {
                            if (granted === true) {
                                return true
                            } else if (granted === false) {
                                return false
                            }
                        })
                        if (locationPermissionGranted === true) {
                            this.props.navigation.navigate('App')
                        } else if (locationPermissionGranted === false) {
                            this.props.navigation.navigate('EnableLocation')
                        }
                    }
                }




            })
            .catch(error => {
                OpenOkDialog(JSON.stringify(error), string.alert.buttonOk, () => { })
            });




    }

    saveData = async data => {
        saveAsyncData(constant.keyAllConstant.isTokenAvailable,
            data.token)
        saveAsyncData(constant.keyAllConstant.userData,
            JSON.stringify(data.userData))

    };

    handleFacebookLogin(props) {
        let instantance = this
        if (!instantance.buttonPressed) {
            instantance.buttonPressed = true;
            LoginManager.logOut();
            setTimeout(() => {
                LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends']).then(
                    function (result) {
                        instantance.buttonPressed = false;
                        if (result.isCancelled) {
                            alert('Login was cancelled');

                            LoginManager.logOut()
                        } else {

                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    let accessToken = data.accessToken
                                    const responseInfoCallback = (error, result) => {
                                        if (error) {
                                            LoginManager.logOut()
                                            alert('Error fetching data: ' + error.toString());
                                        } else {
                                            instantance.callLoginApi(result, accessToken)
                                        }
                                    }

                                    const infoRequest = new GraphRequest(
                                        '/me',
                                        {
                                            accessToken: accessToken,
                                            parameters: {
                                                fields: {
                                                    string: 'email,name,first_name,last_name,id,picture.type(large)'
                                                }
                                            }
                                        },
                                        responseInfoCallback
                                    );

                                    new GraphRequestManager().addRequest(infoRequest).start()

                                }
                            )
                        }
                    },
                    function (error) {
                        instantance.buttonPressed = false;
                        alert('Login failed with error: ' + error);
                        LoginManager.logOut()
                    }
                );
            }, 200);
        }
    }
    render() {

        let instance = this

        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        if(NetworkUtil.returnNetworkState()){
                            { instance.handleFacebookLogin(this.props) }
                        }
                    }}>
                    <View style={style.blueButtonStyle}>
                        <Text style={style.buttonTextStyle}>{string.label_facebook}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    blueButtonStyle: {
        height: dimen.value_8_5hp,
        backgroundColor: colors.colorPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: dimen.marginMedium,
        marginEnd: dimen.marginMedium,
        color: colors.colorFacebook,
        borderRadius: 5

    },
    buttonTextStyle: {
        color: colors.colorWhite,
        fontSize: dimen.fontNormal,
        fontFamily: constant.font.robotoBold,

    },
})

const mapDispatchToProps = dispatch => {
    return {
        commanAction: bindActionCreators(commanAction, dispatch)
    };
};
export default withNavigation(connect(null, mapDispatchToProps)(FacebookButton));