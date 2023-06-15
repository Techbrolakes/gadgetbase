import React from 'react';
import Header from './Header';

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div className="bg-[#F4F4F4] min-h-screen gb-container space-y-6">
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;
