import ApiService from "./apiService.js";

export async function getDiaryDetails() {
    const apiObject = {};
    apiObject.method = 'GET';
    apiObject.authentication = true;
    apiObject.endpoint = 'diary-reports';
    apiObject.body = null;
    return await ApiService.callApi(apiObject);
}
