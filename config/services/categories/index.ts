import request from '../request';
import constants from '@/config/constants';
import { ApiResponse } from '@/utils/interfaces';
import { Category, Payload } from '@/utils/types';

const {
    API: { routes },
} = constants;

interface IGetProductCategories extends ApiResponse {
    data: Category[];
}

const getProductCategories = (): Promise<IGetProductCategories> =>
    request.get({ route: routes.category.getProductCategories });

const createProductCategory = (payload: Payload): Promise<ApiResponse> =>
    request.post({ payload, route: routes.category.createProductCategory });

const deleteProductCategory = (id: string): Promise<ApiResponse> =>
    request.destroy({ route: routes.category.deleteProductCategory.replace('%id%', id) });

const updateProductCategory = (id: string, payload: Payload): Promise<ApiResponse> =>
    request.put({ payload, route: routes.category.updateProductCategory.replace('%id%', id) });

const CategoryService = {
    createProductCategory,
    deleteProductCategory,
    getProductCategories,
    updateProductCategory,
};

export default CategoryService;
