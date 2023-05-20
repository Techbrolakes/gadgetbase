import React from 'react';
import PageHead from '@components/common/components/PageHead';
import AdminLoginForm from '@/components/pagecomponents/admin/AdminLoginForm';

export default function AdminLoginPage() {
    return (
        <>
            <PageHead title="Admin Login" />
            <AdminLoginForm />
        </>
    );
}
