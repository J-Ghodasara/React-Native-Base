import ApiService from '../ApiService'

export default {
    async registerUser(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,requestBody.image === undefined ? false : true,isShowProgress)
    },

    async loginUser(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },

    async forgotPassword(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },

    async getSuggestedUsername(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },

    async verifyOtp(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },

    async resendOtp(apiName,isShowProgress = true) {
        return ApiService.get('user/' + apiName,isShowProgress)
    },

    async changePhoneNumber(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async sendContacts(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async getNearbyFriends(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async followUser(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async sendFBUsers(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async getUserDetails(apiName,isShowProgress = true) {
        return ApiService.get('user/' + apiName,isShowProgress)
    },
    async getSearchHistrory(apiName,isShowProgress = true) {
        return ApiService.get('user/' + apiName,isShowProgress)
    },
    async getSearchPopular(apiName,requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName,requestBody,false,isShowProgress)
    },
    async setLocation(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async getStatusList(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async getMealDietyCuisine(apiName,isShowProgress = true) {
        return ApiService.get('post/' + apiName,false,isShowProgress)
    },
    async changePassword(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async getUserProfile(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async saveUserDetails(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,requestBody.image === undefined ? false : true,isShowProgress)
    },
    async logOut(apiName,isShowProgress = true) {
        return ApiService.get('user/' + apiName,isShowProgress)
    },

    async getUsers(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },

    async createPost(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('post/' + apiName, requestBody,true,isShowProgress)

    },
    async getTermsPrivacy(apiName,isShowProgress = true) {
        return ApiService.get('user/' + apiName,isShowProgress)

    },
    async getOverAllSearch(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },

    async getHistorySearch(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },

    async userSearch(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    },
    async resendVerification(apiName, requestBody,isShowProgress = true) {
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)

    },
    async checkMail(apiName,requestBody,isShowProgress = true){
        return ApiService.post('user/' + apiName, requestBody,false,isShowProgress)
    }
}


