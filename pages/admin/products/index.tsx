import React from 'react';
import PageHead from '@components/common/components/PageHead';
import AdminMainLayout from '@/components/layouts/AdminMainLayout';
import ProductsSection from '@/components/pagecomponents/admin/products/ProductsSection';

export default function AdminProductsPage() {
    return (
        <AdminMainLayout title="Products">
            <PageHead title="Admin Products" />
            <ProductsSection />
        </AdminMainLayout>
    );
}
