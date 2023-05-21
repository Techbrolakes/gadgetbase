import CustomSpinner from '@/components/common/components/Spinner';
import useUser from '@/hooks/useUser';
import { Text } from '@chakra-ui/react';
import React from 'react';

interface IProps {
    title: string;
}

const Header: React.FC<IProps> = ({ title }) => {
    const { data } = useUser();

    if (!data) return <CustomSpinner />;
    return (
        <div className="sticky top-0 py-4 z-10 bg-customblue2 w-full">
            <section className="justify-between items-center flex px-6">
                <Text textStyle="pWhite">{title}</Text>
                <Text textStyle="pWhite">
                    Howdy 👋 {data?.data?.first_name} {data?.data?.last_name}
                </Text>
            </section>
        </div>
    );
};

export default Header;
