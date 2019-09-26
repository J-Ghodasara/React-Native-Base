import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import constant from '../config/constant';
import colors from '../config/colors';
import string from '../config/string';
const { width } = Dimensions.get('window');

function MiniOfflineSign() {
    return (

            <View style={styles.offlineContainer}>
                <Text style={styles.offlineText}>{string.errors.error_noNw}</Text>
            </View>
    );
}
class NetworkAlert extends PureComponent {

    state = {
        isConnected: true
    };

    componentDidMount() {
        PubSub.subscribe(constant.keyAllConstant.key_nw_change, (msg, data) => {
            this.setState({ isConnected: data.isNetworkConnected });
        });
    }

    render() {
        if (!this.state.isConnected) {
            return <MiniOfflineSign />;
        }
        return null;
    }
}
const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: colors.colorPrimary,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        marginStart:10,
        marginEnd:10,
        width
    },
    offlineText: {
        color: colors.colorWhite,
        alignSelf: 'center',
        fontFamily: constant.font.robotoRegular,

    }
});

export default NetworkAlert;