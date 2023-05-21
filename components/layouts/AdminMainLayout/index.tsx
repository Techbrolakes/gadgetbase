import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface IProps {
    children: React.ReactNode;
}

const AdminMainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div className="flex h-screen">
            <div className="hidden lg:block w-56">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <Header />
                <div className="min-h-screen bg-primarybg">{children}</div>
            </div>
        </div>
    );
};

export default AdminMainLayout;
