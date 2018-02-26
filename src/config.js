/* global process */
const isProduction = process.env.NODE_ENV === 'production';

const CONFIG = {
    apiBaseUrl: isProduction ? '' : ''
};

export default CONFIG