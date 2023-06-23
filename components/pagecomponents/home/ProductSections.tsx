import React, { useMemo } from 'react';
import { Text } from '@chakra-ui/react';
import useGetProducts from '@/hooks/products/useGetProducts';
import ProductCard from '@/components/common/components/ProductCard';
import useGetProductCategories from '@/hooks/categories';

const ProductSections: React.FC = () => {
    const { data } = useGetProducts({ pageLimit: 20 });
    const { data: cat } = useGetProductCategories();
    const findPhoneCategory = useMemo(() => cat?.data?.find((ct) => ct.category_name === 'phones'), [cat])?._id;
    const findLaptopCategory = useMemo(() => cat?.data?.find((ct) => ct.category_name === 'laptops'), [cat])?._id;
    const findSmartwatchCategory = useMemo(() => cat?.data?.find((ct) => ct.category_name === 'smartwatches'), [cat])?._id;
    const filteredPhones = data?.data?.data.filter((product) => product.category_id === findPhoneCategory);
    const filteredLaptops = data?.data?.data.filter((product) => product.category_id === findLaptopCategory);
    const filteredSmartwatches = data?.data?.data.filter((product) => product.category_id === findSmartwatchCategory);

    return (
        <div className="space-y-32">
            <section className="space-y-10">
                <div className="flex justify-between">
                    <Text className="font-bold text-2xl">Phones</Text>
                    <Text className="font-bold text-base cursor-pointer">See more phones</Text>
                </div>

                <div className="grid grid-cols-4 place-items-center gap-10">
                    {filteredPhones?.slice(0, 4).map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </div>
            </section>

            {/* LAPTOPS CATEGORY */}
            <section className="space-y-10">
                <div className="flex justify-between">
                    <Text className="font-bold text-2xl">Laptops</Text>
                    <Text className="font-bold text-base cursor-pointer">See more laptops</Text>
                </div>

                <div className="grid grid-cols-4 place-items-center gap-10">
                    {filteredLaptops?.slice(0, 4).map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </div>
            </section>

            {/* SMARTWATCHES CATEGORY */}
            <section className="space-y-10">
                <div className="flex justify-between">
                    <Text className="font-bold text-2xl">Smartwatches</Text>
                    <Text className="font-bold text-base cursor-pointer">See more smartwatches</Text>
                </div>

                <div className="grid grid-cols-4 place-items-center gap-10">
                    {filteredSmartwatches?.slice(0, 4).map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductSections;
