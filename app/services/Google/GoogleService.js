import ApiService from '../ApiService'

export default {
    async getAutoCompleteData(apiData) {
        return ApiService.getGoogle(apiData)
    },
}