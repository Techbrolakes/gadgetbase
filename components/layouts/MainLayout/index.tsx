import React from 'react';
import Header from './Header';

interface IProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div className="bg-[#F4F4F4] pb-8 gb-container space-y-14 opacity-90">
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;
