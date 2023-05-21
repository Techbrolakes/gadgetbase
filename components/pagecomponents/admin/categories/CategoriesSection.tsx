import React from 'react';
import CategoriesTable from './CategoriesTable';
import Button from '@/components/common/components/Button';
import AddCategory from './AddCategory';

const CategoriesSection: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => setIsOpen(true);
    return (
        <section className="mt-12 space-y-12">
            <div className="bg-white w-[95%] shadow-sm py-4 px-1 mx-auto flex justify-end">
                <Button name="Add Product Category" onClick={() => handleOpen()} />
            </div>
            <div className="px-6">
                <CategoriesTable />
            </div>
            <AddCategory isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    );
};

export default CategoriesSection;
