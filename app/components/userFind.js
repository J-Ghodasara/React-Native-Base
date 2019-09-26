import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getImageUri, getCapitalName } from '../helper/Util.js'
import FindFriendsStyle from "../screen/FindFriends/Contacts/Style/FindFriendsContactsStyle";
import FindFriendsContactsStyle from "../screen/FindFriends/Contacts/Style/FindFriendsContactsStyle";
import ImageLoad from "react-native-image-placeholder";
import colors from "../config/colors";
import constant from "../config/constant";
import string from "../config/string";
import dimen from "../config/dimen";
import { Button } from "react-native-elements";
import { OpenOkDialog } from "../components/AlertDialog";
import userService from "../services/User/UserService";
import allSearchDetailsStyle from '../screen/Search/style/AllSearchDetailsStyle'
import Modal from "react-native-modal";

export class UserFindComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonTitle: this.props.isFollow === true ? string.label_unFollow : string.label_follow,
            visible: false
        }
    }

    closeModal() {
        this.setState({ visible: false })
    }

    onButtonPressed = (item) => {
        const requestBody = {
            userId: this.props.id
        };
        userService.followUser(constant.api.followUser, requestBody).then(response => {
        }).catch(error => {
            if (error && error.data && error.data.message) {
                OpenOkDialog(error.data.message, string.alert.buttonOk, () => {
                    if (this.state.buttonTitle === string.label_follow) {
                        this.setState({ buttonTitle: string.label_unFollow })
                    } else {
                        this.setState({ buttonTitle: string.label_follow })
                    }
                });
            } else {
            }
        });
    }
    render() {

        return (
            <View style={{ flexDirection: "column" }}>
                <Modal
                    isVisible={this.state.visible}
                    style={{
                        justifyContent: 'flex-end',
                        margin: 0,
                    }}
                    onBackButtonPress={() => this.closeModal()}
                >
                    <View style={{
                        backgroundColor: 'white',
                        padding: 22,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopStartRadius: 15,
                        borderTopEndRadius: 15,
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                        width: '100%',
                        marginTop: 50
                    }}>
                        <View style={{
                            backgroundColor: colors.colorWhite,

                            width: '100%'
                        }}>
                            <View style={{ height: 3, width: dimen.value_20wp, backgroundColor: colors.colorLightGray, alignSelf: 'center', marginBottom: dimen.marginSmall }}>

                            </View>

                            <View >
                                <Text onPress={() => {
                                    OpenOkDialog("Coming Soon", "Ok", () => { });
                                }} style={{ color: colors.colorBlack, fontSize: 18, margin: 15 }}>Block User</Text>
                            </View>
                            <View >
                                <Text onPress={() => {
                                    setTimeout(() => {
                                        if (this.state.buttonTitle === string.label_follow) {
                                            this.setState({ buttonTitle: string.label_unFollow })
                                        } else {
                                            this.setState({ buttonTitle: string.label_follow })
                                        }
                                    }, 100)
                                    this.closeModal()
                                    this.onButtonPressed();
                                }} style={{ color: colors.colorBlack, fontSize: 18, margin: 15 }}>{string.label_notFollow} </Text>
                            </View>
                            <View >
                                <Text onPress={() => {
                                    this.closeModal()
                                }} style={{ color: colors.colorBlue, fontSize: 18, margin: 15 }}>Cancel</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={FindFriendsContactsStyle.flatListItemContainer}>
                    <View style={FindFriendsStyle.BasicFlatList_imageStyle}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.push('OtherUserProfile', { userId: this.props.id });
                        }}>
                            <View style={FindFriendsStyle.BasicFlatList_circle}>
                                <View>
                                    {this.props.imageUrl === null ? (
                                        <Text style={FindFriendsStyle.BasicFlatList_textCenter}>
                                            {getCapitalName(this.props.userName)}
                                        </Text>
                                    ) : (
                                            <ImageLoad
                                                loadingStyle={{
                                                    size: "small",
                                                    color: colors.colorPrimary
                                                }}
                                                borderRadius={50}
                                                source={getImageUri(this.props.imageUrl)}
                                                placeholderSource={constant.completeProfile.userPlaceHolder}
                                                placeholderStyle={FindFriendsContactsStyle.flatListImageStyle}
                                                style={FindFriendsContactsStyle.flatListImageStyle}
                                            />
                                        )}
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push('OtherUserProfile', { userId: this.props.id });
                    }}>
                        <View style={FindFriendsContactsStyle.flatListItemTextContainerStyle}>
                            <Text onPress={() => {
                                this.props.navigation.push('OtherUserProfile', { userId: this.props.id });
                            }} style={FindFriendsContactsStyle.flatListTextStyle} numberOfLines={1}>
                                {this.props.userName}
                            </Text>
                            {this.props.town === "" ? <Text
                             numberOfLines={1}
                                style={{
                                    fontSize: dimen.value_3_5wp,
                                    marginTop: dimen.value_1wp
                                }}
                            >
                                {this.props.country}

                            </Text> :
                                <Text
                                 numberOfLines={1}
                                    style={{
                                        fontSize: dimen.value_3_5wp,
                                        marginTop: dimen.value_1wp,
                                        width: 140,
                                        height: 20,
                                       
                                        color:this.props.fromSearch === true ? colors.colorLightGray : colors.colorBlack
                                    }}
                                >
                                    {this.props.town},{this.props.country}

                                </Text>
                            }
                            {this.props.fromSearch === true ?  <Text style={allSearchDetailsStyle.postDetailsText}>
                                {this.props.totalPost} posts
                            </Text> : null}
                           
                        </View>
                    </TouchableOpacity>

                    <View style={FindFriendsContactsStyle.flatListButtonContainerStyle}>
                        {this.props.id === this.props.myUserId ? null : <Button
                            type="outline"
                            title={this.state.buttonTitle}
                            titleStyle={{ color: colors.colorBlack }}
                            buttonStyle={FindFriendsContactsStyle.flatListButtonStyle}
                            onPress={e => {
                                if (this.state.buttonTitle === string.label_follow) {
                                    this.setState({ buttonTitle: string.label_unFollow })
                                    this.onButtonPressed();
                                } else {
                                    this.setState({ visible: true });
                                }
                            }}
                        />}

                    </View>
                </View>
                <View style={FindFriendsStyle.BasicFlatlist_divider} />
            </View>
        )
    }
}