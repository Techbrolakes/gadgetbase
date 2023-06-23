import React from 'react';
import CustomSpinner from '@/components/common/components/Spinner';
import useGetProductCategories from '@/hooks/categories';
import useGetProducts from '@/hooks/products/useGetProducts';

interface IProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<IProps> = ({ children }) => {
    const { data: categories } = useGetProductCategories();
    const { data: products } = useGetProducts({});

    if (!categories || !products) return <CustomSpinner fullHeight />;
    return <div>{children}</div>;
};

export default RootLayout;
