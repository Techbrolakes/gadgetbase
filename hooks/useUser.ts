import ProfileService from '@/config/services/user';
import helpers from '@/utils/helper';
import logger from '@logger';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const fetcher = async () => {
        const response = await ProfileService.getUserDetails();
        if (!response.success) {
            helpers.openNotification({ message: response.message, type: 'error' });
            logger({ response });
        }
        return response;
    };

    const { data, isLoading, isError } = useQuery({
        queryFn: () => fetcher(),
        queryKey: ['user'],
    });

    return { data, isError, isLoading };
};

export default useUser;
