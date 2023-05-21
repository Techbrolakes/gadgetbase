import { Heading } from '@chakra-ui/react';
import React from 'react';
import constants from '@config/constants';
import { useRouter } from 'next/router';

const { CLIENT_ROUTES } = constants;

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    const router = useRouter();
    return (
        <>
            <Heading onClick={() => router.push(CLIENT_ROUTES.home)} className={`p-2 cursor-pointer ${className}`}>
                Gadgetbase
            </Heading>
        </>
    );
};

export default Logo;
