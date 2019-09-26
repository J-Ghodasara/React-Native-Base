import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import dimen from '../config/dimen';
import constant from '../config/constant';
import colors from '../config/colors';
import string from '../config/string';
import Down from '../assets/image/ic_arrow.svg'
import HomeSearch from '../assets/image/ic_home_search.svg'
import { clearAsyncData, saveAsyncData, getAsyncData } from '../helper/AsyncStorageUtil';
import { getCurrentLocation } from '../helper/LocationUtil';
import RNLocation from "react-native-location";
import * as commanAction from '../redux/actions/CommanActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Platform } from "react-native";
import { withNavigation } from 'react-navigation';
import Geocoder from 'react-native-geocoding';
import UserService from '../services/User/UserService';
import PubSub from 'pubsub-js';
import NetworkUtil from '../helper/NetworkUtil';
import { OpenOkDialog } from '../components/AlertDialog';
import { displayConsole } from '../helper/ConsoleUtil';
class Topbar extends React.Component {


    componentWillMount() {
        Geocoder.init(constant.keyAllConstant.key_google);
    }

    state = {
        placeName: '',
        location: {}
    }
    clearStorage = () => {

        clearAsyncData().then(res => {
            saveAsyncData(constant.keyAllConstant.isUserFirstTime, 'false');
            this.props.navigation.navigate('Auth')
        }).catch(error => {
            displayConsole('error=>' + JSON.stringify(e))
        })
    }

    componentDidMount = async () => {
        PubSub.subscribe('updateLocation', (msg, data) => {
           this.setState({placeName:data.name,location:data.location})
          })
        var locationPermissionGranted = await RNLocation.checkPermission({
            ios: "whenInUse", // or 'always'
            android: {
                detail: "coarse" // or 'fine'
            }
        }).then(async (granted) => {
            if (granted === true) {
                getAsyncData(constant.keyAllConstant.userData).then(res => {
                    if (JSON.parse(res).city != undefined && JSON.parse(res).city != "" && JSON.parse(res).location.length != 0) {
                        let loc = { ...this.state.location }
                        loc.latitude = JSON.parse(res).location[1]
                        loc.longitude = JSON.parse(res).location[0]
                        loc.latitudeDelta = 1
                        loc.longitudeDelta = 1
                        this.setState({
                            placeName: JSON.parse(res).city,
                            location: loc
                        })
                    } else {
                        this.setState({
                            placeName: 'Set Location',
                            location: {}
                        })
                    }
                }).catch(error => {

                })
                return true
            } else if (granted === false) {
                this.setState({
                    placeName: 'Set Location',
                    location: {}
                })
                return false
            }
        })
    }

    getCountry = (city, location) => {
        let loc = { ...this.state.location }
        loc.latitude = location.latitude,
            loc.longitude = location.longitude,
            loc.latitudeDelta = location.latitudeDelta,
            loc.longitudeDelta = location.longitudeDelta
        this.setState({
            placeName: city,
            location: loc
        })
    }

    setCurrentLocation(locations) {
        var city = "";
        var country = "";
        var state = "";
        var address = ''
        Geocoder.from(locations[0].latitude, locations[0].longitude)
            .then(json => {
                address = json.results[0].formatted_address;
                var addressComponent = json.results[0].address_components;
                for (i = 0; i < addressComponent.length; i++) {
                    if (
                        (addressComponent[i].types[0] === "locality" ||
                            addressComponent[i].types[0] ===
                            "administrative_area_level_2") &&
                        addressComponent[i].types[1] === "political"
                    ) {
                        city = addressComponent[i].long_name;
                    }
                    if (
                        addressComponent[i].types[0] ===
                        "administrative_area_level_1" &&
                        addressComponent[i].types[1] === "political"
                    ) {
                        state = addressComponent[i].long_name;
                    }
                    if (
                        addressComponent[i].types[0] === "country" &&
                        addressComponent[i].types[1] === "political"
                    ) {
                        country = addressComponent[i].long_name;
                    }
                }

                var requestBody = {
                    address: address,
                    latitude: locations[0].latitude,
                    longitude: locations[0].longitude,
                    city: city,
                    country: country
                }

                var sendName = ''
                if (city !== "") {
                    sendName = city
                } else if (state !== "") {
                    sendName = state
                } else if (country !== "") {
                    sendName = country
                } else {
                    sendName = "Set Location"
                }
                
                


                if (requestBody != '') {
                    const instance = this
                    var location = {
                        latitude: parseFloat(locations[0].latitude),
                        longitude: parseFloat(locations[0].longitude),
                        longitudeDelta: 1,
                        latitudeDelta: 1
                    }


                    this.props.showProgressDialog(true);
                            UserService.setLocation(constant.api.setLocation, requestBody).then(res => {
                                this.props.showProgressDialog(false);
                                getAsyncData(constant.keyAllConstant.userData).then(res => {
                                    var tempData = JSON.parse(res)
                                    if (tempData != null) {

                                        if (tempData.location === undefined) {
                                            let locArray = []
                                            locArray[0] = locations[0].longitude
                                            locArray[1] = locations[0].latitude
                                            tempData.location = locArray
                                        } else {
                                            tempData.location[0] = locations[0].longitude
                                            tempData.location[1] = locations[0].latitude
                                        }

                                        tempData.city = requestBody.city
                                        this.setState({ placeName: sendName });
                                        saveAsyncData(constant.keyAllConstant.userData, JSON.stringify(tempData))
                                        this.props.navigation.navigate('SetLocation', { getCountry: this.getCountry })
                                        this.props.showProgressDialog(false);
                                    }

                                }).catch(error => { })

                            }).catch(error => {
                                if (error && error.data && error.data.message) {
                                    OpenOkDialog(error, string.alert.buttonOk, () => {
                                        this.props.showProgressDialog(false);
                                    })
                                } else {
                                    this.props.showProgressDialog(false);
                                }
                            })



                    
                }
            })
            .catch(error => displayConsole(error));

    }

    locationNotFetched = false
    showDialog = true

    getCurrentLocation = async (selectedPlaceDetails) => {
        let instance = this
        this.props.showProgressDialog(true);
        if (this.state.placeName === 'Set Location') {
            var locationUpdateStarted = await getCurrentLocation(this);

           


            if (locationUpdateStarted) {
                setTimeout(()=>{
                    if(this.showDialog){
                        this.locationNotFetched = true
                        this.props.showProgressDialog(false);
                        OpenOkDialog(string.alert.locationNotFound,"Ok",()=>{
        
                        });
                    }
                   
                },15000)
                var count = 1;
                const locationSubscription = RNLocation.subscribeToLocationUpdates(
                    locations => {
                      
                        if (locations.length !== 0 && !this.locationNotFetched) {
                            this.showDialog = false
                            if (count === 1) {
                                count++;
                                var location = {
                                    latitudeDelta: 1,
                                    longitudeDelta: 1,
                                    latitude: parseFloat(locations[0].latitude),
                                    longitude: parseFloat(locations[0].longitude)
                                }
                                saveAsyncData(constant.keyAllConstant.isSetRadius, 'false')
                                saveAsyncData(constant.keyAllConstant.isLocationSelected, 'true');
                                saveAsyncData(constant.keyAllConstant.keyLocation, JSON.stringify({ location: location }));

                                if (locationSubscription) {
                                    locationSubscription();
                                }
                                this.setState({
                                    location: location
                                })
                                this.setCurrentLocation(locations)

                            }
                        } else {
                            this.props.showProgressDialog(false);
                        }
                    }
                );
            } else {
                this.setState({ placeName: 'Set Location' })
                this.props.showProgressDialog(false);
            }
        } else {
            if (this.state.location === undefined || this.state.location.latitude === "" || this.state.location.latitude === undefined) {
                const locations = {
                    latitude: 0,
                    longitude: 0,
                    latitudeDelta: 1,
                    longitudeDelta: 1
                }
                this.setState({ location: locations });
            }
            saveAsyncData(constant.keyAllConstant.isLocationSelected, 'true');
            saveAsyncData(constant.keyAllConstant.isSetRadius, 'false')
            saveAsyncData(constant.keyAllConstant.keyLocation, JSON.stringify({ location: this.state.location }));
            this.props.navigation.navigate('SetLocation', { getCountry: this.getCountry })
            this.props.showProgressDialog(false);
        }
    }

    render() {
        const { selectedPlaceDetails } = this.props

        const commanView = (
            <View style={topBarStyle.viewStyle}>
                <TouchableOpacity
                    style={{ alignSelf: 'center', flexDirection: 'row' }}
                    onPress={() => {
                        if(NetworkUtil.returnNetworkState()){
                            this.locationNotFetched = false
                            this.getCurrentLocation(selectedPlaceDetails)
                        }
                    }}
                >
                    <Text style={topBarStyle.labelStyle}>{this.state.placeName}</Text>
                    <Down
                        width={wp("4%")}
                        height={hp("4%")}
                        style={topBarStyle.downIconStyle}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={topBarStyle.searchIconStyle}
                    onPress={() => {
                        this.props.navigation.navigate('EditProfile');

                    }}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={topBarStyle.iconStyle}
                    onPress={() => {
                        if(NetworkUtil.returnNetworkState()){
                            this.props.navigation.navigate('SearchPopularHistory');
                        }
                    }}>
                    <HomeSearch
                        width={dimen.value_8wp}
                        height={dimen.value_8wp}
                    />
                </TouchableOpacity>

            </View>
        );
        return (
            <View>
                {Platform.OS === "ios" ? (
                    <View>
                        {commanView}
                        <View
                            style={{
                                width: "100%",
                                height: 1,
                                backgroundColor: colors.colorLightGray,
                                position: "absolute",
                                bottom: 0
                            }}
                        />
                    </View>
                ) : (
                        <View>{commanView}</View>
                    )}
            </View>



        );
    }

}

const topBarStyle = StyleSheet.create({
    viewStyle: {
        marginTop: Platform.OS === "ios" ? dimen.value_5hp : 0,
        flexDirection: "row",
        backgroundColor: colors.colorWhite,
        height: dimen.value_8_5hp,
        elevation: 5,
        padding: 10
    },
    labelStyle: {
        fontFamily: constant.font.robotoBold,
        fontSize: dimen.fontSize.textAppearanceHeadline6_20,
        color: colors.colorBlack,
        textAlignVertical: "center",
        alignSelf: "center"
    },
    downIconStyle: {
        alignSelf: "center",
        marginTop: dimen.value_1wp,
        marginStart: dimen.value_2_5wp
    },
    iconStyle: {
        right: 0,
        alignSelf: "center",
        position: "absolute",
        marginEnd: dimen.value_3wp
    },
    searchIconStyle: {
        right: 10,
        alignSelf: "center",
        position: "absolute",
        marginEnd: dimen.value_20wp
    }
});

const mapStateToProps = state => {
    return ({
        selectedPlaceDetails: state.commanReducers.selectedPlaceDetails,
        location: state.commanReducers.location,
    });

}

const mapDispatchToProps = dispatch => {
    return {
        commanAction: bindActionCreators(commanAction, dispatch)
    };
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(Topbar)); 
