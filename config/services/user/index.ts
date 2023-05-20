import request from '../request';
import constants from '@/config/constants';
import { ApiResponse } from '@/utils/interfaces';
import { IUser, Payload } from '@/utils/types';

const {
    API: { routes },
} = constants;

export interface IUserResponse extends ApiResponse {
    data: IUser;
}

const getUserDetails = (): Promise<ApiResponse> => request.get({ route: routes.userManagement.getUserDetails });

const editUser = (payload: Payload): Promise<ApiResponse> =>
    request.post({ payload, route: routes.userManagement.editUser });

const resetPassword = (payload: Payload): Promise<ApiResponse> =>
    request.post({ payload, route: routes.userManagement.resetPassword });

const UserService = {
    editUser,
    getUserDetails,
    resetPassword,
};

export default UserService;
