import logger from '@logger';
import { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';
import constants from '@config/constants';
import gadgetbase from './gadgetbase';

const { COOKIES } = constants;
const cookies = parseCookies();
const token = cookies[COOKIES.user];

const get = async <T>({ route, config }: { route: string; config?: AxiosRequestConfig }): Promise<T> => {
    const headers = { ...(token && { 'x-auth-token': encodeURIComponent(token) }) };
    const options: AxiosRequestConfig = {
        headers,
        ...config,
    };
    try {
        const response = await gadgetbase.get(route, options);
        return response.data as T;
    } catch (error: any) {
        logger({ error });
        return error?.response?.data;
    }
};

const post = async <T, X>({ route, payload }: { route: string; token?: string; payload?: X }): Promise<T> => {
    try {
        const response = await gadgetbase.post(route, payload);
        return response.data as T;
    } catch (error: any) {
        logger({ error });
        return error?.response?.data;
    }
};

const put = async <T, X>({ route, payload }: { route: string; token?: string; payload?: X }): Promise<T> => {
    try {
        const response = await gadgetbase.put(route, payload);
        return response.data as T;
    } catch (error: any) {
        logger({ error });
        return error?.response?.data;
    }
};

const postFormData = async <T, X>({ route, payload }: { route: string; payload: X }): Promise<T> => {
    const headers = {
        'Content-Type': 'multipart/form-data',
    };
    try {
        const response = await gadgetbase.put(route, payload, { headers });
        return response.data as T;
    } catch (error: any) {
        logger({ error });
        return error?.response?.data;
    }
};

const destroy = async <T>({ route }: { route: string; token?: string }): Promise<T> => {
    try {
        const response = await gadgetbase.delete(route);
        return response.data as T;
    } catch (error: any) {
        logger({ error });
        return error?.response?.data;
    }
};

const requests = {
    destroy,
    get,
    post,
    postFormData,
    put,
};

export default requests;
