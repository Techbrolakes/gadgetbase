import toast from 'react-hot-toast';
import { INotification } from './interfaces';

const openNotification = ({ type, message }: INotification): void => {
    toast[type](message, {
        className: 'text-sm',
        duration: 5000,
        position: 'top-right',
    });
};

const helpers = {
    openNotification,
};

export default helpers;
