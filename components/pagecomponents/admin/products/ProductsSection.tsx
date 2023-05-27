import React, { useState } from 'react';
import Button from '@/components/common/components/Button';
import Input from '@/components/common/components/Input';
import useGetProducts from '@/hooks/products/useGetProducts';
import ProductsTable from './ProductsTable';
import AddProduct from './AddProduct';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

const ProductsSection: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [search, setSearch] = useState('');
    const { data, isLoading } = useGetProducts({ search });
    const handleOpen = () => setIsOpen(true);
    const onClose = () => setOpenModal(false);
    const handleModelOpen = () => setOpenModal(true);

    return (
        <section className="mt-12 space-y-12">
            <div className="bg-white w-[95%] shadow-sm py-4 px-1 mx-auto flex gap-6 items-end justify-end">
                <div className="w-1/5">
                    <Input placeholder="Search Products" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <Button name="Add Product" onClick={() => handleOpen()} />
                <Button name="Filter Product" onClick={() => handleModelOpen()} />
            </div>
            <ProductsTable isLoading={isLoading} data={data?.data?.data} />
            <AddProduct isOpen={isOpen} setIsOpen={setIsOpen} />

            <Modal isOpen={openModal} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textStyle="p">Filter Products</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody></ModalBody>
                </ModalContent>
            </Modal>
        </section>
    );
};

export default ProductsSection;
