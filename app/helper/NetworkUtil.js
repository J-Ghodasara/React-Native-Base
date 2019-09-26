import NetInfo from '@react-native-community/netinfo';
import constant from '../config/constant';

class NetworkUtil {

    static isNetworkConnected = false

    static initializeNetwork() {
        NetInfo.addEventListener(state => {
            this.handleConnectionChange(state)
        });
    }

    static handleConnectionChange(state) {
        isNetworkConnected = state.isConnected
        PubSub.publish(constant.keyAllConstant.key_nw_change, { isNetworkConnected })

    }
    static returnNetworkState() {
        return isNetworkConnected;
    }

}

export default NetworkUtil;