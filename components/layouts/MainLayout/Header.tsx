import React from 'react';
import Logo from '@/components/common/components/Logo';
import { MdPerson } from 'react-icons/md';
import { Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center py-4 opacity-90">
            <Logo />

            <section className="flex gap-16 text">
                <span>Home</span>
                <Popover trigger="hover" placement="bottom">
                    <PopoverTrigger>
                        <div className="flex items-center cursor-pointer gap-3">
                            <span>Categories</span>
                            <IoMdArrowDropdown size="20px" />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="border-none outline-none shadow-none">
                        <div className="p-4">lfmslsf</div>
                    </PopoverContent>
                </Popover>
                <span>Wishlist</span>
            </section>

            <section className="flex gap-6 items-center ">
                <Popover trigger="hover" placement="bottom">
                    <PopoverTrigger>
                        <MdPerson size={'30px'} />
                    </PopoverTrigger>
                    <PopoverContent className="border-none outline-none shadow-none">
                        <PopoverBody>anl</PopoverBody>
                    </PopoverContent>
                </Popover>

                <FaShoppingCart size={'26px'} />
            </section>
        </div>
    );
};

export default Header;
