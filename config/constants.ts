const API = {
    baseURL: 'http://localhost:400/api/v1/',
    error: {
        aborted: {
            code: 'ECONNABORTED',
            description: 'Please check your network connection and try again',
            message: 'Network Error!',
        },
        expiredToken: 'Access denied. Token Expired',
    },
    routes: {
        auth: {
            login: 'user/login',
            recoverPassword: 'user/recover',
            registerUser: 'user/register',
            resendVerification: 'user/resend',
            resetPassword: 'user/reset-password',
            verifyOtp: '/user/verify-otp',
        },
        userManagement: {
            editUser: 'user/edit',
            getUserDetails: 'user/get',
            resetPassword: 'user/reset',
        },
    },
    timeout: 500000,
};

const COOKIES = {
    user: 'gadgetbase-user',
};

const CLIENT_ROUTES = {
    home: '/',
};

const constants = {
    API,
    CLIENT_ROUTES,
    COOKIES,
};

export default constants;
