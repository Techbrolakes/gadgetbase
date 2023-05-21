import toast from 'react-hot-toast';
import { INotification } from './interfaces';
import dayjs from 'dayjs';

const openNotification = ({ type, message }: INotification): void => {
    toast[type](message, {
        className: 'text-sm',
        duration: 5000,
        position: 'top-right',
    });
};
const formatDate = (dateString: Date) => {
    return dayjs(dateString).format('DD/MM/YYYY');
};

const helpers = {
    formatDate,
    openNotification,
};

export default helpers;
