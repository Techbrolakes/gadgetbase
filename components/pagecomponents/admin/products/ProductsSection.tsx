import React, { useState } from 'react';
import Button from '@/components/common/components/Button';
import Input from '@/components/common/components/Input';
import useGetProducts from '@/hooks/products/useGetProducts';
import ProductsTable from './ProductsTable';
import AddProduct from './AddProduct';

const ProductsSection: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [search, setSearch] = useState('');
    const { data, isLoading } = useGetProducts({ search });
    const handleOpen = () => setIsOpen(true);

    return (
        <section className="mt-12 space-y-12">
            <div className="bg-white w-[95%] shadow-sm py-4 px-1 mx-auto flex gap-6 items-end justify-end">
                <div className="w-1/5">
                    <Input placeholder="Search Products" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <Button name="Add Product" onClick={() => handleOpen()} />
                <Button name="Filter Product" onClick={() => handleOpen()} />
            </div>
            <ProductsTable isLoading={isLoading} data={data?.data?.data} />
            <AddProduct isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    );
};

export default ProductsSection;
