import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import useUser from '@/hooks/useUser';
import CustomSpinner from '@/components/common/components/Spinner';

interface IProps {
    children: React.ReactNode;
    title: string;
}

const AdminMainLayout: React.FC<IProps> = ({ children, title }) => {
    const { data } = useUser();

    if (!data) return <CustomSpinner />;
    return (
        <div className="flex h-screen">
            <div className="hidden lg:block w-56">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <Header title={title} />
                <div className="min-h-screen bg-primarybg">{children}</div>
            </div>
        </div>
    );
};

export default AdminMainLayout;
