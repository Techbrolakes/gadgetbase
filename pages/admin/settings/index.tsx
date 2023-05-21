import React from 'react';
import PageHead from '@components/common/components/PageHead';
import AdminMainLayout from '@/components/layouts/AdminMainLayout';

export default function AdminSettingsPage() {
    return (
        <AdminMainLayout title="Settings">
            <PageHead title="Admin Products" />
            <h1 className="h-screen">Admin Setting Page</h1>
        </AdminMainLayout>
    );
}
