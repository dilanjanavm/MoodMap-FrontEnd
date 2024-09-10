import ApiService from "./apiService.js";

export async function getDiaryDetails() {
    const apiObject = {};
    apiObject.method = 'GET';
    apiObject.authentication = true;
    apiObject.endpoint = 'diary-reports';
    apiObject.body = null;
    return await ApiService.callApi(apiObject);
}

export async function getDiaryDetailsById(id) {
    const apiObject = {};
    apiObject.method = 'GET';
    apiObject.authentication = true;
    apiObject.endpoint = `diary-reports/${id}`;
    apiObject.body = null;
    return await ApiService.callApi(apiObject);
}

export async function saveDiaryDetails(data) {
    const apiObject = {};
    apiObject.method = 'POST';
    apiObject.authentication = true;
    apiObject.endpoint = `predict_details`;
    apiObject.body = data;
    return await ApiService.callApi(apiObject);
}
