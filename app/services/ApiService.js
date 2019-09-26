import request from './Api'
import apiConfig from '../config/apiConfig'



const post = async function (apiName, requestBody, isMultiPartData,isShowProgress) {
    return request({
        url: apiConfig.Base_url + apiName,
        method: 'Post',
        data: requestBody,
    }, isMultiPartData,isShowProgress
    );
}



const get = async function (apiName,isShowProgress) {
    return request({
        url: apiConfig.Base_url + apiName,
        method: 'Get',

    }, false,isShowProgress);
}

const getGoogle = async function (apiData) {
    return request({
        url: apiConfig.Google_Base_url + apiData,
        method: 'Get',
    }, false,true)
}

const apiService = {
    post,
    get,
    getGoogle,
    
};

export default apiService;