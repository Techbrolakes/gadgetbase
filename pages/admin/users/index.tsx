import React from 'react';
import PageHead from '@components/common/components/PageHead';
import AdminMainLayout from '@/components/layouts/AdminMainLayout';

export default function AdminUsersPage() {
    return (
        <AdminMainLayout title="Users">
            <PageHead title="Admin Users" />
            <h1 className="h-screen">Admin Users Page</h1>
        </AdminMainLayout>
    );
}
