/* eslint-disable @next/next/no-img-element */
import React from 'react';
import helpers from '@/utils/helper';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import constants from '@/config/constants';

interface IProps {
    product_name: string;
    product_image: string;
    product_price: number;
    _id: string;
}

const { CLIENT_ROUTES } = constants;
const ProductCard: React.FC<IProps> = ({ product_name, product_image, product_price, _id }) => {
    const router = useRouter();

    return (
        <section
            onClick={() => router.push(CLIENT_ROUTES.products.single.replace('%id%', _id))}
            className="bg-white h-[300px] cursor-pointer w-[260px] p-6 flex flex-col justify-center items-center space-y-6 gb-radius duration-150 transition-all ease-linear hover:shadow-md"
        >
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
