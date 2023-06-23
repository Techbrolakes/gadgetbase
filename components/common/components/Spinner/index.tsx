import React from 'react';
import { Spinner } from '@chakra-ui/react';

interface IProps {
    fullHeight?: boolean;
}

const CustomSpinner: React.FC<IProps> = ({ fullHeight }) => {
    return (
        <div className={`${fullHeight ? 'min-h-screen' : 'min-h-[40vh]'} flex-center`}>
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </div>
    );
};

export default CustomSpinner;
