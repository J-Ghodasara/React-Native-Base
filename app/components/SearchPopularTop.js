import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native'
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
import { withNavigation, StackActions } from 'react-navigation';
import { Platform } from "react-native";
import { checkNetworkInfo } from '../helper/NetworkUtil';
import { OpenOkDialog } from '../components/AlertDialog';
import { debounce } from "underscore";

class SearchPopularTop extends React.Component {


    state = {
        search: this.props.navigation.getParam('searchText', ''),
    }

    onCancelClick = () => {
        this.props.navigation.goBack(null);
    }

    updateSearch = search => {
        this.setState({ search });
        this.props.searchClick(search)

    };

    render() {
        return (
            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: colors.colorWhite, width: '100%' }}>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%', marginRight: 5 }}>
                    <SearchBar
                        placeholder={string.label_type_search}
                        value={this.state.search}
                        lightTheme={true}
                        autoFocus={false}
                        round={true}
                        searchIcon={{ color: colors.colorTomato }}
                        inputStyle={{ fontSize: dimen.fontSize.textAppearanceCaption_14 }}
                        inputContainerStyle={{ backgroundColor: colors.colorSearBar, height: Platform.OS === "ios" ? dimen.value_7wp : null }}
                        containerStyle={this.state.isVisible ?
                            { backgroundColor: colors.colorWhite, width: Platform.OS === "ios" ? "105%" : '85%' } :
                            { backgroundColor: colors.colorWhite, width: Platform.OS === "ios" ? "105%" : '85%' }}
                        cancelButtonTitle='Cancel'
                        onChangeText={this.updateSearch}

                    />
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={style.doneLabelStyle}
                            onPress={() => {
                                this.onCancelClick()
                            }}>{string.label_cancel}</Text>
                    </View>
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
        color: colors.colorPrimary,
        textAlign: 'right',
        textAlignVertical: 'center',
        fontSize: dimen.fontSize.textAppearanceSubtitle1_16,
        alignSelf: 'center',
        // marginEnd:10
    }
})


export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(SearchPopularTop));