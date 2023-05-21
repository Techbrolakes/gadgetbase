import React from 'react';
import constants from '@/config/constants';
import { MdDashboard } from 'react-icons/md';
import { HiShoppingCart, HiShoppingBag, HiCollection } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { CgLogOut } from 'react-icons/cg';
import Link from 'next/link';
import Logo from '@/components/common/components/Logo';
import { useRouter } from 'next/router';

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
            icon: <HiShoppingBag />,
            name: 'Products',
            path: CLIENT_ROUTES.admin.products,
        },
        {
            icon: <HiCollection />,
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
            path: CLIENT_ROUTES.admin.settings,
        },
    ];
    const router = useRouter();
    const { pathname } = router;

    return (
        <div className="bg-customblue2 border-r-[1px] border-r-blue-100 h-full flex flex-col space-y-14">
            <Logo className="text-white px-6" />
            {ADMIN_MENU.map(({ icon, path, name }) => (
                <Link href={path} key={path}>
                    <section
                        className={` ${
                            path === pathname ? 'text-blue-400' : 'text-white'
                        } hover:text-blue-400 transition-all duration-150 ease-linear flex gap-4 px-6 `}
                    >
                        <span className="text-2xl">{icon}</span>
                        <span className="font-bold">{name}</span>
                    </section>
                </Link>
            ))}
            <section className="flex gap-4 px-6 text-white">
                <CgLogOut fontSize={'24px'} />
                <span className="font-bold">Logout</span>
            </section>
        </div>
    );
};

export default Sidebar;
