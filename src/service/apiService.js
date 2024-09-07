import axios from 'axios';
import apiConfig from './apiConfig';
import Cookies from "js-cookie";
import * as constants from "../constants/constants";
import * as authService from "./auth";


export const callApi = async (apiObject) => {
    let body = {};
    let headers;
    let method = apiObject.method ? apiObject.method.toLowerCase() : 'get';

    if (method === 'post' || method === 'put' || method === 'patch' || method === 'delete') {
        body = apiObject.body ? apiObject.body : {};
    }


    headers = {
        'Content-Type': apiObject.multipart ? 'multipart/form-data' : apiObject.urlencoded ? 'application/x-www-form-urlencoded' : 'application/json'
    };



    if (apiObject.authentication) {
        let access_token = Cookies.get(constants.ACCESS_TOKEN);
        console.log(access_token)
        let refresh_token = Cookies.get(constants.REFRESH_TOKEN);
        if (access_token && apiObject.state !== 'refresh_token') {
            headers.Authorization = `Bearer ${access_token}`;
        } else if (apiObject.state === 'refresh_token') {
            headers.Authorization = `Bearer ${refresh_token}`;
        }

    }

    if (apiObject.isBasicAuth) {
        headers.Authorization = `Basic ${constants.BASIC_AUTH}`;
    }

    headers.VerfiyCode = Cookies.get(constants.VERIFY_CODE);

    const url = apiObject.isWithoutPrefix ? `${apiConfig.serverUrl}/${apiObject.endpoint}` : `${apiConfig.serverUrl}/${apiObject.endpoint}`;

    // const url = `${apiConfig.serverUrl}/${apiObject.endpoint}`;
    let result;

   // await axios[method](url, {headers: headers}, {headers: headers})
       await axios[method](url, method !== 'get' && method !== 'delete' ? body : {headers: headers}, {headers: headers})
        //  await axios[method](url, method !== 'get' && method !== 'delete' ? body : {headers: headers}, {headers: headers})
        .then(async response => {
            result = {
                ...await response.data,
                desc: response.data.desc ? response.data.desc : response.data.result,
                status: response && response.status ? response.status : 0
            };
        })
        .catch(async error => {
            console.log(error.response)
            if (error !== undefined) {
                if (error.response === undefined) {
                    result = {
                        success: false, status: 2, data: null,
                        message: "Your connection was interrupted"
                    }
                } else if (error.response.status === 422) {
                    console.log(error.response.data)
                    result = {
                        success: false, status: 2, data: null,
                        message:error.response.data.message.message
                }

                } else if (error.response.status === 403) {
                    result = {
                        success: false, status: 2, data: null,
                        message: "Access is denied."
                    };
                } else if (error.response.status === 417) {
                    result = {
                        success: false, status: 2, data: null,
                        message: "Oops! Something went wrong."
                    };
                } else if (error.response.status === 409) {
                    result = {
                        success: false, status: 2, data: null,
                        message:error.response.data.message.message
                    };
                } else if (error.response.data !== undefined) {
                    result = {
                        success: false, status: 0, data: null,
                        message: error.response.data.result ? error.response.data.result : 'Sorry, something went wrong'
                    }
                } else {
                    result = {
                        success: false, status: 2, data: null,
                        message: "Sorry, something went wrong."
                    };
                }
            } else {
                result = {
                    success: false, status: 2, data: null,
                    message: "Your connection was interrupted!"
                };
            }
            throw result;
        });


    return result;
};
export const renewTokenHandler = async (apiObject) => {
    //alert('refreshToken')
    //  Cookies.remove(constants.ACCESS_TOKEN);
    //  Cookies.remove(constants.REFRESH_TOKEN);
    //  Cookies.remove(constants.Expire_time);
    //  Cookies.remove('userDetails');
    //  Cookies.remove(constants.ACCESS_TOKEN);
    //  window.location = `/login`;


    let result;
    // renew token - start
    const obj = {refresh_token: Cookies.get(constants.REFRESH_TOKEN), grant_type: 'refresh_token'};


    await authService.renewToken().then(async response => {

        Cookies.set(constants.ACCESS_TOKEN, response.data.access_token);
        Cookies.set(constants.REFRESH_TOKEN, response.data.refresh_token);
        result = await callApi(apiObject);
    }).catch(async c => {


        window.location = `/login`;
    });
    // renew token - end
    return result;
};

export default {renewTokenHandler, callApi};
