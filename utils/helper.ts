import toast from 'react-hot-toast';
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
        className: 'text-sm',
        duration: 5000,
        position: 'top-right',
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
