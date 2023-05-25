import request from '../request';
import constants from '@/config/constants';
import { ApiResponse } from '@/utils/interfaces';
import { Payload, Product, ProductParams } from '@/utils/types';

const {
    API: { routes },
} = constants;

interface IProductResponse extends ApiResponse {
    data: {
        data: Product[];
    };
}

interface IProductBrandResponse extends ApiResponse {
    data: string[];
}

const createProduct = (payload: Payload): Promise<ApiResponse> =>
    request.post({ payload, route: routes.products.createProduct });

const getSingleProduct = (id: string): Promise<IProductResponse> =>
    request.get({ route: routes.products.getSingleProduct.replace('%id%', id) });

const getProductsByCategoryId = ({
    id,
    brand,
    maxPrice,
    minPrice,
    page,
    pageLimit,
    search,
}: ProductParams): Promise<IProductResponse> =>
    request.get({
        config: {
            params: {
                brand,
                maxPrice,
                minPrice,
                page,
                perpage: pageLimit,
                search,
            },
        },
        route: routes.products.getProductByCategoryId.replace('%id%', id),
    });

const getProducts = ({
    brand,
    maxPrice,
    minPrice,
    page,
    pageLimit,
    search,
}: ProductParams): Promise<IProductResponse> =>
    request.get({
        config: {
            params: {
                brand,
                maxPrice,
                minPrice,
                page,
                perpage: pageLimit,
                search,
            },
        },
        route: routes.products.getProducts,
    });

const getProductsBrands = (): Promise<IProductBrandResponse> =>
    request.get({ route: routes.products.getProductsBrands });

const getProductBrandsByCategoryId = (id: string): Promise<IProductBrandResponse> =>
    request.get({ route: routes.products.getProductBrandsByCategoryId.replace('%id%', id) });

const deleteProduct = (id: string): Promise<ApiResponse> =>
    request.destroy({ route: routes.products.deleteProduct.replace('%id%', id) });

const updateProduct = (id: string, payload: Payload): Promise<ApiResponse> =>
    request.put({ payload, route: routes.products.updateProduct.replace('%id%', id) });

const ProductService = {
    createProduct,
    deleteProduct,
    getProductBrandsByCategoryId,
    getProducts,
    getProductsBrands,
    getProductsByCategoryId,
    getSingleProduct,
    updateProduct,
};

export default ProductService;
