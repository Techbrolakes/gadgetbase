import React from 'react';
import Logo from '@/components/common/components/Logo';
import { MdPerson } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { RiArrowUpSFill } from 'react-icons/ri';
import { Popover } from '@headlessui/react';
import TransitionBox from '@/components/common/components/TransitionBox';
import useGetProductCategories from '@/hooks/categories';

const Header: React.FC = () => {
    const { data } = useGetProductCategories();

    return (
        <div className="flex justify-between items-center py-4">
            <Logo />

            <section className="flex gap-16 text">
                <span>Home</span>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button className="border-none outline-none">
                                <div className="flex gap-3 items-center">
                                    <span>Categories</span>
                                    {open ? <RiArrowUpSFill size={'24px'} /> : <IoMdArrowDropdown size={'24px'} />}
                                </div>
                            </Popover.Button>
                            <TransitionBox>
                                <Popover.Panel className="absolute left-[-30px] z-10 bg-white w-[180px] mt-[6px] rounded-sm shadow-md">
                                    {data?.data?.map(({ _id, category_name }) => (
                                        <div key={_id} className="space-y-4 flex flex-col">
                                            <span className="gb-link">{category_name}</span>
                                        </div>
                                    ))}
                                </Popover.Panel>
                            </TransitionBox>
                        </>
                    )}
                </Popover>
                <span>Wishlist</span>
            </section>

            <section className="flex gap-6 items-center ">
                <div className="cursor-pointer">
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button className="border-none outline-none">
                                    <div className="flex gap-[5px] items-end">
                                        <MdPerson size={'30px'} />
                                        {open ? <RiArrowUpSFill size={'24px'} /> : <IoMdArrowDropdown size={'24px'} />}
                                    </div>
                                </Popover.Button>

                                <TransitionBox>
                                    <Popover.Panel className="absolute left-[-40px] z-10 bg-white w-[150px] mt-[4px] rounded-sm shadow-md">
                                        <div className="flex flex-col">
                                            <span className="gb-link">Login</span>
                                            <span className="gb-link">Register</span>
                                        </div>
                                    </Popover.Panel>
                                </TransitionBox>
                            </>
                        )}
                    </Popover>
                </div>

                <FaShoppingCart size={'26px'} />
            </section>
        </div>
    );
};

export default Header;
