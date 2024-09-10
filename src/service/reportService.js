//emotion-reports

import ApiService from "./apiService.js";

export async function getReportForByDateRange(data) {
    const apiObject = {};
    apiObject.method = 'POST';
    apiObject.authentication = true;
    apiObject.endpoint = `emotion-reports`;
    apiObject.body = data;
    return await ApiService.callApi(apiObject);
}
