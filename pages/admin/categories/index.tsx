import React from 'react';
import PageHead from '@components/common/components/PageHead';
import AdminMainLayout from '@/components/layouts/AdminMainLayout';
import CategoriesSection from '@/components/pagecomponents/admin/categories/CategoriesSection';

export default function AdminCategoriesPage() {
    return (
        <AdminMainLayout title="Categories">
            <PageHead title="Admin Categories" />
            <CategoriesSection />
        </AdminMainLayout>
    );
}
