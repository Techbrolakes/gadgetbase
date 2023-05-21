import React from 'react';
import PageHead from '@components/common/components/PageHead';
import AdminMainLayout from '@/components/layouts/AdminMainLayout';

export default function AdminProductsPage() {
    return (
        <AdminMainLayout>
            <PageHead title="Admin Products" />
            <h1 className="h-screen">Admin Product Page</h1>
        </AdminMainLayout>
    );
}
