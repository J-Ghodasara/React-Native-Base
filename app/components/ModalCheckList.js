import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableHighlight, Alert, Button } from 'react-native';
import string from '../config/string';
import colors from '../config/colors';
import dimen from '../config/dimen';
import constant from '../config/constant';
import { CheckBox } from 'react-native-elements'
import Modal from "react-native-modal";
import { ScrollView } from 'react-native-gesture-handler';

export default class ModalCheckList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                isVisible={this.props.visible}
                onSwipeComplete={() => this.props.closeModelPress()}
                style={styles.bottomModal}
                onSwipeThreshold={200}
                onBackButtonPress={() => this.props.closeModelPress()}
            >
                {this.renderModalContent()}
            </Modal>
        )
    }
    renderModalContent = () => (
        <View style={styles.content}>
            <View style={styles.innerContainerModal}>
                <View style={{ height: 3, width: dimen.value_20wp, backgroundColor: colors.colorLightGray, alignSelf: 'center', marginBottom: dimen.marginSmall }} />

                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={() => this.clearAllChecked()}>
                        <Text style={styles.textClearALl}>{string.label_clear_all}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.closeModelPress()}>
                        <Text style={styles.closeText}>{string.label_close}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView keyboardShouldPersistTaps="always">
                    {this.createListModal()}
                </ScrollView>
            </View>
        </View>
    );
    createListModal() {
        var listItem = []

        for (i = 0; i < this.getListLength(); i++) {
            const current = i
            listItem.push(
                <CheckBox
                    textStyle={{ color: colors.colorGray }}
                    containerStyle={styles.checkBoxContainer}
                    checkedColor={colors.profileTabSelectedColor}
                    uncheckedColor={colors.profileTabSelectedColor}
                    title={this.getTitle(current)}
                    checked={this.getCheckedStatus(current)}
                    onPress={() => { this.changeCheckedStatus(current) }}
                />
            )
        }
        return (
            <View>
                {listItem.length != 0 ? listItem : (<Text style={styles.noDataFound}>{string.label_no_data_found}</Text>)}
            </View>
        )

    }

    clearAllChecked = () => {
        if (this.props.selectedModal == 1) {
            for (i = 0; i < this.props.mealDietyCuisineData.meals.length; i++) {
                this.props.mealDietyCuisineData.meals[i].checked = false
            }
        } else if (this.props.selectedModal == 2) {
            for (i = 0; i < this.props.mealDietyCuisineData.diets.length; i++) {
                this.props.mealDietyCuisineData.diets[i].checked = false
            }
        } else if (this.props.selectedModal == 3) {
            for (i = 0; i < this.props.mealDietyCuisineData.cuisines.length; i++) {
                this.props.mealDietyCuisineData.cuisines[i].checked = false
            }
        }
        this.setState({ mealDietyCuisineData: this.props.mealDietyCuisineData })

    }
    getTitle = current => {
        if (this.props.selectedModal == 1) {
            return this.props.mealDietyCuisineData.meals[current].name
        } else if (this.props.selectedModal == 2) {
            return this.props.mealDietyCuisineData.diets[current].name
        } else if (this.props.selectedModal == 3) {
            return this.props.mealDietyCuisineData.cuisines[current].name
        }
        else {
            return ""
        }
    }
    getCheckedStatus = current => {
        if (this.props.selectedModal == 1) {
            return this.props.mealDietyCuisineData.meals[current].checked
        } else if (this.props.selectedModal == 2) {
            return this.props.mealDietyCuisineData.diets[current].checked
        } else if (this.props.selectedModal == 3) {
            return this.props.mealDietyCuisineData.cuisines[current].checked
        }
        else {
            return ""
        }
    }

    changeCheckedStatus = current => {
        if (this.props.selectedModal == 1) {
            this.props.mealDietyCuisineData.meals[current].checked = !this.props.mealDietyCuisineData.meals[current].checked
        } else if (this.props.selectedModal == 2) {
            this.props.mealDietyCuisineData.diets[current].checked = !this.props.mealDietyCuisineData.diets[current].checked
        }
        else if (this.props.selectedModal == 3) {
            this.props.mealDietyCuisineData.cuisines[current].checked = !this.props.mealDietyCuisineData.cuisines[current].checked
        }
        this.setState({ mealDietyCuisineData: this.props.mealDietyCuisineData })
    }

    getListLength = () => {
        if (this.props.selectedModal == 1) {
            return this.props.mealDietyCuisineData.meals.length
        } else if (this.props.selectedModal == 2) {
            return this.props.mealDietyCuisineData.diets.length
        } else if (this.props.selectedModal == 3) {
            return this.props.mealDietyCuisineData.cuisines.length
        }
        else {
            return 0
        }
    }

}

const styles = StyleSheet.create({
    containerModal: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: dimen.paddingMedium,
    },
    innerContainerModal: {
        width: '100%'
    }
    , actionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: dimen.marginMedium,
        marginVertical: dimen.marginTiny
    }
    , textClearALl: {
        alignSelf: 'flex-end',
        fontFamily: constant.font.muliBold,
        fontSize: dimen.fontSize.textAppearanceBody3_15,
        color: colors.colorGray,

    },
    checkBoxContainer: {
        backgroundColor: colors.colorWhite
    }
    , closeText: {
        alignSelf: 'flex-end',
        marginStart: dimen.marginMedium,
        fontFamily: constant.font.muliBold,
        fontSize: dimen.fontSize.textAppearanceBody3_15,
        color: colors.colorRed,
    },
    noDataFound: {
        marginVertical: dimen.marginSmall,
        fontFamily: constant.font.muliBold,
        fontSize: dimen.fontSize.textAppearanceBody3_15,
        color: colors.colorGray,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxHeight: '90%'
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
});
