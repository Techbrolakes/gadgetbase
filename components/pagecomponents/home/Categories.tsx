import React from 'react';
import useGetProductCategories from '@/hooks/categories';
import { Text } from '@chakra-ui/react';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { IoLaptopOutline } from 'react-icons/io5';
import { RiComputerLine } from 'react-icons/ri';
import { TbDeviceWatch } from 'react-icons/tb';
import { MdBluetoothAudio, MdBatteryCharging50 } from 'react-icons/md';

const Categories: React.FC = () => {
    const { data } = useGetProductCategories();

    return (
        <div className="space-y-20">
            <Text className="font-bold text-4xl">Categories</Text>

            <div className="flex flex-wrap gap-7 justify-between">
                {data?.data?.map(({ _id, category_name }) => (
                    <section
                        key={_id}
                        className="bg-[#B8C0C7] hover:bg-[#c2cad0] cursor-pointer grid place-items-center capitalize h-[250px] w-[190px] gb-radius"
                    >
                        <div className="flex flex-col items-center gap-10">
                            <section>
                                <span>{category_name === 'laptops' && <IoLaptopOutline size={'65px'} />} </span>
                                <span>
                                    {category_name === 'phones' && <HiOutlineDevicePhoneMobile size={'65px'} />}
                                </span>
                                <span>{category_name === 'desktops' && <RiComputerLine size={'65px'} />} </span>
                                <span>{category_name === 'smartwatches' && <TbDeviceWatch size={'65px'} />} </span>
                                <span>{category_name === 'audio' && <MdBluetoothAudio size={'65px'} />} </span>
                                <span>{category_name === 'chargers' && <MdBatteryCharging50 size={'65px'} />} </span>
                            </section>
                            <Text className="text-xl font-bold">{category_name}</Text>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Categories;
