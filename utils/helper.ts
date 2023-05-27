import { toast, Slide } from 'react-toastify';
import { INotification } from './interfaces';
import dayjs from 'dayjs';

interface IProps {
    number: any;
    isCurrency?: boolean;
    currency?: 'NGN' | 'USD';
    notation?: 'compact' | 'standard';
}

const openNotification = ({ type, message }: INotification): void => {
    toast[type](message, {
        autoClose: 5000,
        className: '!text-sm !bg-customblue !text-white',
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: 'top-center',
        progress: undefined,
        transition: Slide,
    });
};

const formatDate = (dateString: Date) => {
    return dayjs(dateString).format('DD MMM YYYY');
};

const formatNumber = ({ number, isCurrency = false, currency = 'NGN', notation = 'standard' }: IProps): string => {
    const locale = 'en-Gb';
    const numberToFormat = number;
    return isCurrency
        ? new Intl.NumberFormat(locale, {
              currency,
              currencySign: 'accounting',
              notation,
              style: 'currency',
          }).format(numberToFormat)
        : new Intl.NumberFormat(locale, { notation }).format(numberToFormat);
};

const helpers = {
    formatDate,
    formatNumber,
    openNotification,
};

export default helpers;
