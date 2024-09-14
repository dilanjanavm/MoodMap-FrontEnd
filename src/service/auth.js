import ApiService from './apiService';

export async function loginWithEmailAndPassword(data) {
    const apiObject = {};
    apiObject.method = 'POST';
    apiObject.authentication = true;
    apiObject.endpoint = 'login';
    apiObject.body = data;
    return await ApiService.callApi(apiObject);
}

export async function registerUser(data) {
    const apiObject = {};
    apiObject.method = 'POST';
    apiObject.authentication = true;
    apiObject.endpoint = 'register';
    apiObject.body = data;
    return await ApiService.callApi(apiObject);
}
