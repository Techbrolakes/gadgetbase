import React from 'react';
import constants from '@/config/constants';
import { MdDashboard, MdCategory } from 'react-icons/md';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUsers, FaShoppingBag } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import Link from 'next/link';
import { Flex, Stack, Text } from '@chakra-ui/react';

const { CLIENT_ROUTES } = constants;

const Sidebar: React.FC = () => {
    const ADMIN_MENU = [
        {
            icon: <MdDashboard />,
            name: 'Overview',
            path: CLIENT_ROUTES.admin.overview,
        },
        {
            icon: <HiShoppingCart />,
            name: 'Orders',
            path: CLIENT_ROUTES.admin.orders,
        },
        {
            icon: <FaShoppingBag />,
            name: 'Products',
            path: CLIENT_ROUTES.admin.products,
        },
        {
            icon: <MdCategory />,
            name: 'Categories',
            path: CLIENT_ROUTES.admin.categories,
        },
        {
            icon: <FaUsers />,
            name: 'Users',
            path: CLIENT_ROUTES.admin.users,
        },
        {
            icon: <AiFillSetting />,
            name: 'Settings',
            path: CLIENT_ROUTES.admin.users,
        },
    ];

    return (
        <Stack direction={'column'} bg={'blue.900'} width={''} height={'100%'} spacing={'14'}>
            {ADMIN_MENU.map(({ icon, path, name }) => (
                <Link href={path} key={path}>
                    <Flex align="center" px="6" gap="10px" color="white" _hover={{ color: 'blue.500' }}>
                        <Text fontSize={'2xl'}>{icon}</Text>
                        <Text as="p" fontWeight={'bold'}>
                            {name}
                        </Text>
                    </Flex>
                </Link>
            ))}
        </Stack>
    );
};

export default Sidebar;
