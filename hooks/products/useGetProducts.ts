import { useQuery } from '@tanstack/react-query';
import helpers from '@/utils/helper';
import logger from '@logger';
import ProductService from '@/config/services/product';
import { ProductParams } from '@/utils/types';

const useGetProducts = ({ brand, maxPrice, minPrice, page, pageLimit, search }: ProductParams) => {
    const fetcher = async () => {
        const response = await ProductService.getProducts({ brand, maxPrice, minPrice, page, pageLimit, search });
        if (!response.success) {
            helpers.openNotification({ message: response.message, type: 'error' });
            logger({ response });
        }
        return response;
    };

    const { data, isLoading, isError } = useQuery({
        queryFn: () => fetcher(),
        queryKey: ['products', brand, maxPrice, minPrice, page, pageLimit, search],
    });

    return { data, isError, isLoading };
};

export default useGetProducts;
