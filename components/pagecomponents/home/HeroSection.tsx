import React from 'react';
import Lottie from 'lottie-react';
import shoppingCart from '@animations/online-shopping.json';
import Button from '@/components/common/components/Button';
import { Input, Text } from '@chakra-ui/react';

const HeroSection: React.FC = () => {
    return (
        <div className="bg-white h-[75vh] p-2 flex justify-between items-center">
            <section className="space-y-16 p-4 pl-16">
                <Text className="text-5xl font-semibold w-3/4 leading-snug text-customblue">
                    Best place for all your Gadgets
                </Text>
                <div className="space-y-6 w-5/6">
                    <Input size={'lg'} placeholder="Type to search for products" />
                    <Button name="Search Product" />
                </div>
            </section>

            <section className="">
                <Lottie animationData={shoppingCart} className="w-[600px]" />
            </section>
        </div>
    );
};

export default HeroSection;
