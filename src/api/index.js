import axios from 'axios'
import CONFIG from '../config'

const headers = {
    //
};

const request = axios.create({
    baseURL: CONFIG.apiBaseUrl,
    headers: headers
});

request.interceptors.response.use( null, error => {
    const { status } = error.response;

    if (status === 401) {
        //
    }

    if (status === 403) {
        //
    }

    return Promise.reject(error);
});


export default request