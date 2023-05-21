import { Spinner } from '@chakra-ui/react';
import React from 'react';

const CustomSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </div>
    );
};

export default CustomSpinner;
