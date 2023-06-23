/* eslint-disable @next/next/no-img-element */
import helpers from '@/utils/helper';
import { Text } from '@chakra-ui/react';
import React from 'react';

interface IProps {
    product_name: string;
    product_image: string;
    product_price: number;
}

const ProductCard: React.FC<IProps> = ({ product_name, product_image, product_price }) => {
    return (
        <section className="bg-white h-[300px] cursor-pointer w-[260px] p-6 flex flex-col justify-center items-center space-y-6 gb-radius duration-150 transition-all ease-linear hover:shadow-sm">
            <div className="h-[120px]">
                <img src={product_image} alt="product_image" className="object-cover w-full h-full" />
            </div>
            <Text noOfLines={1} className="capitalize">
                {product_name}
            </Text>
            <Text noOfLines={1} className="font-bold">
                ₦{' '}
                {helpers.formatNumber({
                    notation: 'standard',
                    number: product_price,
                })}
            </Text>
        </section>
    );
};

export default ProductCard;
