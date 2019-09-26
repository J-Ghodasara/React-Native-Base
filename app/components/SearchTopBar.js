import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import dimen from '../config/dimen';
import colors from '../config/colors';
import { SearchBar } from 'react-native-elements';
import string from '../config/string';
import * as commanAction from '../redux/actions/CommanActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import constant from '../config/constant';
import Geocoder from 'react-native-geocoding';
import UserService from '../services/User/UserService';
import { withNavigation} from 'react-navigation';
import { Platform } from "react-native";
import { OpenOkDialog } from '../components/AlertDialog';
import { saveAsyncData, getAsyncData } from '../helper/AsyncStorageUtil';
import { displayConsole } from '../helper/ConsoleUtil';
class SearchTopBar extends React.Component {

    state = {
        isVisible: false
    }

    instance = this


    componentWillMount = () => {
        Geocoder.init(constant.keyAllConstant.key_google);
        let isShow = false
        if (this.props.id === string.screen.screen_setLocation) {
            isShow = true
        } else {
            isShow = false
        }
        this.setState({
            isVisible: isShow
        })
    }

    OnDoneClick = (requestBody, data) => {
        if (requestBody != '') {
            const instance = this
            var location = {
                latitude: data.latitude,
                longitude: data.longitude,
                longitudeDelta: 1,
                latitudeDelta: 1
            }

                    UserService.setLocation(constant.api.setLocation, requestBody).then(res => {
                        getAsyncData(constant.keyAllConstant.userData).then(res => {
                            var tempData = JSON.parse(res)
                            if (tempData != null) {

                                if (tempData.location === undefined) {
                                    let locArray = []
                                    locArray[0] = location.longitude
                                    locArray[1] = location.latitude
                                    tempData.location = locArray
                                } else {
                                    tempData.location[0] = location.longitude
                                    tempData.location[1] = location.latitude
                                }

                                tempData.city = requestBody.city
                                saveAsyncData(constant.keyAllConstant.userData, JSON.stringify(tempData))
                            }
                            instance.props.navigation.state.params.getCountry(requestBody.city, location);
                            instance.props.navigation.goBack(null);
                        }).catch(error => { })

                    }).catch(error => {
                        if (error && error.data && error.data.message) {
                            OpenOkDialog(error, string.alert.buttonOk, () => {
                            })
                        } 
                    })
        }

    }

    updateStateFromSearchLocation = (location,addressComponent) => {
        this.props.handleUpdatetedState(location,addressComponent)
    }

    onCickSearch = () => {

        if (this.props.id === 'SetLocation') {
            this.props.navigation.navigate('SearchLocation', [{ updateStateFromSearchLocation: this.updateStateFromSearchLocation },{miles: parseFloat(this.props.miles) }])
        } else if (this.props.id === 'SearchLocation') {
            this.props.navigation.navigate('GooglePlaceScreen', { updateStateFromSearchLocation: this.updateStateFromSearchLocation })

        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return ((this.props.searchText === '') || (this.props.selectedPlaceDetails === "") || (this.props.location.latitude != nextProps.location.latitude && this.props.location.longitude != nextProps.location.longitude));
    }

    render() {
        const { location } = this.props
        const { searchText } = this.props
        var city = ''
        var country = ''
        var state = ''
        var address = ''
        var requestBody = ''
        var data = ''
        var lat = 0.0
        var lng = 0.0

        Geocoder.from(location.latitude, location.longitude).then(json => {
            address = json.results[0].formatted_address
            var addressComponent = json.results[0].address_components;
            for (i = 0; i < addressComponent.length; i++) {
                if ((addressComponent[i].types[0] === 'locality' || addressComponent[i].types[0] === 'administrative_area_level_2') && addressComponent[i].types[1] === 'political') {
                    city = addressComponent[i].long_name
                }
                if (addressComponent[i].types[0] === 'administrative_area_level_1' && addressComponent[i].types[1] === 'political') {
                    state = addressComponent[i].long_name
                }
                if (addressComponent[i].types[0] === 'country' && addressComponent[i].types[1] === 'political') {
                    country = addressComponent[i].long_name
                }

            }
            data = {
                address: address,
                city: city,
                state: state,
                latitude: location.latitude,
                longitude: location.longitude,
                country: country
            }
            this.props.commanAction.updateSearchText(json.results[0].formatted_address);

            requestBody = {
                address: address,
                latitude: location.latitude,
                longitude: location.longitude,
                city: city,
                country: country
            }
        }).catch(error => displayConsole(error));



        var textComponent = this.state.isVisible ? <View style={{ alignSelf: 'center' }}><Text style={style.doneLabelStyle}
            onPress={() => {
                this.OnDoneClick(requestBody, data)
            }}>Done</Text></View> : null

        return (
            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: colors.colorWhite }}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                    <SearchBar
                        placeholder={string.label_setLocation}
                        value={searchText != undefined ? searchText : ''}
                        lightTheme={true}
                        autoFocus={false}
                        round={true}
                        selection={{start:0, end:0}}
                        searchIcon={{ color: colors.colorTomato }}
                        inputStyle={{ fontSize: dimen.fontSize.textAppearanceCaption_14 }}
                        inputContainerStyle={{ backgroundColor: colors.colorSearBar, height: Platform.OS === "ios" ? dimen.value_7wp : null }}
                        containerStyle={this.state.isVisible ? { backgroundColor: colors.colorWhite, width: Platform.OS === "ios" ? "105%" : '85%' } : { backgroundColor: colors.colorWhite, width: Platform.OS === "ios" ? "130%" : '100%' }}
                        cancelButtonTitle='Cancel'
                        onFocus={() => {
                            this.onCickSearch()
                        }}
                    />
                    {textComponent}
                </View>


            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({
        selectedPlaceDetails: state.commanReducers.selectedPlaceDetails,
        location: state.commanReducers.location,
        searchText: state.commanReducers.searchText

    });

};

const mapDispatchToProps = dispatch => {
    return {
        commanAction: bindActionCreators(commanAction, dispatch)
    };
};

const style = StyleSheet.create({
    doneLabelStyle: {
        color: colors.colorPrimary, alignSelf: 'center', textAlignVertical: 'center', fontFamily: constant.font.robotoBold, fontSize: dimen.fontSize.textAppearanceSubtitle1_16
    }
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(SearchTopBar));