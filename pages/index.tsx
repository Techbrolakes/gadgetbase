import React from 'react';
import PageHead from '@components/common/components/PageHead';
import MainLayout from '@/components/layouts/MainLayout';
import HomeSection from '@/components/pagecomponents/home/HomeSection';

export default function HomePage() {
    return (
        <MainLayout>
            <PageHead title="Homepage" />
            <HomeSection />
        </MainLayout>
    );
}
