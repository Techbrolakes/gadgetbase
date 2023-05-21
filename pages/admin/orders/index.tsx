import React from 'react';
import PageHead from '@components/common/components/PageHead';
import AdminMainLayout from '@/components/layouts/AdminMainLayout';

export default function AdminOrdersPage() {
    return (
        <AdminMainLayout title="Orders">
            <PageHead title="Admin Orders" />
            <h1 className="h-screen">Admin Order Page</h1>
        </AdminMainLayout>
    );
}
