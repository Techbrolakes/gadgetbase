import { ApiResponse } from '@/utils/interfaces';
import constants from '@/config/constants';
import request from '../request';
import { ILogin, Payload } from '@/utils/types';

const {
    API: { routes },
} = constants;

export interface ILoginResponse extends ApiResponse {
    data: ILogin;
}

const register = (payload: Payload): Promise<ApiResponse> => request.post({ payload, route: routes.auth.registerUser });

const login = (payload: Payload): Promise<ILoginResponse> => request.post({ payload, route: routes.auth.login });

const recoverPassword = (payload: Payload): Promise<ApiResponse> =>
    request.post({ payload, route: routes.auth.recoverPassword });

const verifyOtp = (payload: Payload): Promise<ApiResponse> => request.post({ payload, route: routes.auth.verifyOtp });

const resendVerification = (payload: Payload): Promise<ApiResponse> =>
    request.post({ payload, route: routes.auth.resendVerification });

const resetPassword = (payload: Payload): Promise<ApiResponse> =>
    request.post({ payload, route: routes.auth.resetPassword });

const AuthService = {
    login,
    recoverPassword,
    register,
    resendVerification,
    resetPassword,
    verifyOtp,
};

export default AuthService;
