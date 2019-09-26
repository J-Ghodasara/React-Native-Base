import axios from 'axios';
import apiConfig from '../config/apiConfig';
import { getAsyncData } from '../helper/AsyncStorageUtil';
import constant from '../config/constant';
import NavigationService from '../navigation/NavigationService';
import { clearAsyncData, saveAsyncData } from '../helper/AsyncStorageUtil';
import { OpenOkDialog } from '../components/AlertDialog';
import string from "../config/string";
import NetworkUtil from '../helper/NetworkUtil';
import { displayConsole } from '../helper/ConsoleUtil';

const client = (() => {
  return axios.create({
    baseURL: apiConfig.Base_url
  });
})();

const request = async function (options, isMultiPartData, isShowProgress) {
  if (NetworkUtil.returnNetworkState()) {
    PubSub.publish(constant.keyAllConstant.keyPubProgress, { isShow: isShowProgress })

    let authHeader = null;
    const res = await getAsyncData(constant.keyAllConstant.isTokenAvailable);

    if (res) {
      authHeader = res
      if (isMultiPartData) {

        options.headers = {
          'x-auth-token': authHeader,
          'Content-Type': 'multipart/form-data'
        }
      } else {
        options.headers = {
          'x-auth-token': authHeader
        }
      }
    } else if (isMultiPartData) {
      options.headers = {
        'Content-Type': 'multipart/form-data'
      }
    }

    const onSuccess = function (response) {
      PubSub.publish(constant.keyAllConstant.keyPubProgress, { isShow: false })
      displayConsole(response);
      if (response.status === 203) {
        return response;
      } else {
        return response.data;
      }

    }

    const onError = function (error) {
      PubSub.publish(constant.keyAllConstant.keyPubProgress, { isShow: false })
      displayConsole(error.config);
      if (error.response.status === 403) {
        clearAsyncData().then(res => {
          saveAsyncData(constant.keyAllConstant.isUserFirstTime, 'false');

        }).catch(error => {
          displayConsole('error=>' + JSON.stringify(error))
        })

        saveAsyncData(constant.keyAllConstant.isSignIn, '0');
        setTimeout(() => {
          OpenOkDialog(error.response.data.message, string.alert.buttonOk, () => { });
        }, 200)

        NavigationService.navigate('Auth');
        return Promise.reject("");

      } else {
        return Promise.reject(error.response || error.message);
      }


    }


    displayConsole(options)
    return client(options)
      .then(onSuccess)
      .catch(onError);
  } else {
    return Promise.reject(string.errors.error_network);
  }

}

export default request;