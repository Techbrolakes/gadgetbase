import React from 'react';
import PageHead from '@components/common/components/PageHead';
import AdminMainLayout from '@/components/layouts/AdminMainLayout';

export default function AdminOverviewPage() {
    return (
        <AdminMainLayout title="Overview">
            <PageHead title="Admin Overview" />
            <h1>Admin Overview Page</h1>
        </AdminMainLayout>
    );
}
