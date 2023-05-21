import { useQuery } from '@tanstack/react-query';
import helpers from '@/utils/helper';
import logger from '@logger';
import CategoryService from '@/config/services/categories';

const useGetProductCategories = () => {
    const fetcher = async () => {
        const response = await CategoryService.getProductCategories();
        if (!response.success) {
            helpers.openNotification({ message: response.message, type: 'error' });
            logger({ response });
        }
        return response;
    };

    const { data, isLoading, isError } = useQuery({
        queryFn: () => fetcher(),
        queryKey: ['productCategories'],
    });

    return { data, isError, isLoading };
};

export default useGetProductCategories;
