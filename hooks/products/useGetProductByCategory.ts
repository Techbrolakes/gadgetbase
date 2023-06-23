import { useQuery } from '@tanstack/react-query';
import helpers from '@/utils/helper';
import logger from '@logger';
import ProductService from '@/config/services/product';
import { ProductParams } from '@/utils/types';

const useGetProductByCategory = ({ brand, maxPrice, minPrice, page, pageLimit, search }: ProductParams, id: any) => {
    const fetcher = async () => {
        const response = await ProductService.getProductsByCategoryId(
            {
                brand,
                maxPrice,
                minPrice,
                page,
                pageLimit,
                search,
            },
            id,
        );
        if (!response.success) {
            helpers.openNotification({ message: response.message, type: 'error' });
            logger({ response });
        }
        return response;
    };

    const { data, isLoading, isError } = useQuery({
        queryFn: () => fetcher(),
        queryKey: ['productsByCategory', brand, maxPrice, minPrice, page, pageLimit, search, id],
    });

    return { data, isError, isLoading };
};

export default useGetProductByCategory;
