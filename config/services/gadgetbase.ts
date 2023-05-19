import axios from 'axios';
import logger from '@logger';
import nookies, { parseCookies } from 'nookies';
import constants from '@config/constants';

const {
    API: { baseURL, error: err, timeout },
    COOKIES,
    CLIENT_ROUTES,
} = constants;

const gadgetbase = axios.create({
    baseURL,
    timeout,
});

gadgetbase.interceptors.request.use(
    (config) => {
        const x = config;
        const cookies = parseCookies();
        const token = cookies[COOKIES.user];

        if (x.headers && token) {
            x.headers['x-auth-token'] = encodeURIComponent(token);
        }
        return x;
    },
    (error) => {
        logger({ error });
        return Promise.reject(error);
    },
);

gadgetbase.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (
            error?.response?.status === 401 &&
            (error?.response?.data?.message?.toLocaleLowerCase() === err?.expiredToken?.toLocaleLowerCase() ||
                error?.response?.data?.message?.toLocaleLowerCase() ===
                    'Access denied. No token provided.'.toLocaleLowerCase())
        ) {
            nookies.destroy(null, COOKIES.user, { path: CLIENT_ROUTES.home });
            window.location.pathname = CLIENT_ROUTES.home;
        }
        return Promise.reject(error);
    },
);
export default gadgetbase;
