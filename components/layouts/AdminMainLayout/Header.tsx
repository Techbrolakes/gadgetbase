import { Text } from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="sticky top-0 py-4 z-10 bg-customblue2 w-full">
            <section className="justify-between items-center flex px-6">
                <Text textStyle="pWhite">Overview</Text>
                <Text textStyle="pWhite">Howdy 👋 Olamilekan Daramola</Text>
            </section>
        </div>
    );
};

export default Header;
