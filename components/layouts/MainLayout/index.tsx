import React from 'react';
import Header from './Header';
import RootLayout from '../RootLayout';

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <RootLayout>
            <div className="bg-[#F4F4F4] pb-8 gb-container space-y-14 opacity-90">
                <Header />
                {children}
            </div>
        </RootLayout>
    );
};

export default MainLayout;
