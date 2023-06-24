import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import PageHead from '@components/common/components/PageHead';

interface IProps {
    id: string;
}

const SingleProductPage: NextPage<IProps> = ({ id }: IProps) => {
    return (
        <MainLayout>
            <PageHead title="Product" />
            <h1>{id}</h1>
            <h1>Single Product Page</h1>
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.params?.id;

    if (!id) {
        return {
            props: {},
            redirect: {
                destination: '/',
                parmanent: false,
            },
        };
    }

    return {
        props: {
            id,
        },
    };
};

export default SingleProductPage;
