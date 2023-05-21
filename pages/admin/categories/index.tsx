import React from 'react';
import PageHead from '@components/common/components/PageHead';
import AdminMainLayout from '@/components/layouts/AdminMainLayout';

export default function AdminCategoriesPage() {
    return (
        <AdminMainLayout title="Categories">
            <PageHead title="Admin Categories" />
            <h1 className="h-screen">Admin Categories Page</h1>
        </AdminMainLayout>
    );
}
