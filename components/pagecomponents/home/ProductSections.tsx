import React from 'react';
import { Text } from '@chakra-ui/react';
import useGetProducts from '@/hooks/products/useGetProducts';
import GbImage from '@/components/common/components/GbImage';
import helpers from '@/utils/helper';

const ProductSections: React.FC = () => {
    const { data } = useGetProducts({});
    return (
        <div>
            <section className="space-y-10">
                <div className="flex justify-between">
                    <Text className="font-bold text-2xl">Phones</Text>
                    <Text className="font-bold text-base cursor-pointer">See more phones</Text>
                </div>

                <div className="flex gap-8 flex-wrap justify-between items-center">
                    {data?.data?.data.map(({ product_name, product_image, product_price }) => (
                        <section
                            key={product_name}
                            className="bg-white h-[400px] w-[300px] px-3 py-6 flex flex-col items-center space-y-4"
                        >
                            <GbImage src={product_image} alt="product_image" width={110} height={100} />
                            <Text className="capitalize">{product_name}</Text>
                            <Text noOfLines={1}>
                                ₦{' '}
                                {helpers.formatNumber({
                                    notation: 'standard',
                                    number: product_price,
                                })}
                            </Text>
                        </section>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductSections;
