import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import Button from '@/components/common/components/Button';
import ImagePicker from '@/components/common/components/ImagePicker';
import helpers from '@/utils/helper';
import { useFormik } from 'formik';
import logger from '@/logger';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ProductService from '@/config/services/product';
import Input from '@/components/common/components/Input';
import TextArea from '@/components/common/components/TextArea';
import NumberInput from '@/components/common/components/NumberInput';
import useGetProductCategories from '@/hooks/categories';
import Select from '@/components/common/components/Select';
import { Product } from '@/utils/types';

interface IProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    currentProduct: Product;
}

const EditProduct: React.FC<IProps> = ({ isOpen, setIsOpen, currentProduct }) => {
    const { data } = useGetProductCategories();
    const queryClient = useQueryClient();
    const id = currentProduct?._id;
    const mutation = useMutation(ProductService.updateProduct);

    const productCategories = data?.data?.map(({ category_name, _id }) => ({
        label: category_name,
        value: _id,
    }));

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            category_id: '' || currentProduct?.category_id,
            product_brand: '' || currentProduct?.product_brand,
            product_description: '' || currentProduct?.product_description,
            product_image: '' || currentProduct?.product_image,
            product_name: '' || currentProduct?.product_name,
            product_price: '' || currentProduct?.product_price,
            product_quantity: '' || currentProduct?.product_quantity,
        },
        onSubmit: async (
            {
                product_price,
                product_name,
                category_id,
                product_brand,
                product_description,
                product_image,
                product_quantity,
            },
            { setSubmitting, resetForm },
        ) => {
            const payload = {
                category_id,
                product_brand,
                product_description,
                product_image,
                product_name,
                product_price,
                product_quantity,
            };
            try {
                const response = await mutation.mutateAsync({ id, payload });
                if (!response.success) {
                    return helpers.openNotification({ message: response.message, type: 'error' });
                }
                helpers.openNotification({ message: response.message, type: 'success' });
                queryClient.invalidateQueries(['products']);
            } catch (error) {
                return logger(error);
            } finally {
                setSubmitting(false);
                setIsOpen(false);
                resetForm();
            }
        },
    });

    const { handleChange, values, handleSubmit, isSubmitting, errors, touched, setFieldValue } = formik;

    console.log(values.category_id);
    return (
        <Drawer size={'sm'} isOpen={isOpen} placement="right" onClose={() => setIsOpen(false)}>
            <DrawerOverlay className="opacity-20 bg-black" />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Edit Product</DrawerHeader>

                <DrawerBody>
                    <form className="space-y-8 my-8">
                        <Input
                            label="Product Name"
                            name="product_name"
                            onChange={handleChange}
                            value={values.product_name}
                            help={touched.product_name && errors.product_name}
                            validateStatus={(touched.product_name && errors.product_name && 'error') || ''}
                        />
                        <Select
                            label="Product Categories"
                            placeholder="Select Product Category"
                            onChange={(event) => setFieldValue('category_id', event.target.value)}
                            value={values.category_id}
                            options={productCategories}
                            validateStatus={(touched.category_id && errors.category_id && 'error') || ''}
                            help={touched.category_id && errors.category_id}
                        />
                        <ImagePicker onImageSelected={(file, secureUrl) => setFieldValue('product_image', secureUrl)} />
                        <NumberInput
                            label="Product Price (₦)"
                            name="product_price"
                            onChange={handleChange}
                            value={values.product_price}
                            help={touched.product_price && errors.product_price}
                            validateStatus={(touched.product_price && errors.product_price && 'error') || ''}
                        />
                        <TextArea
                            label="Product Description"
                            name="product_description"
                            onChange={handleChange}
                            value={values.product_description}
                            help={touched.product_description && errors.product_description}
                            validateStatus={
                                (touched.product_description && errors.product_description && 'error') || ''
                            }
                        />
                        <Input
                            label="Product Brand"
                            name="product_brand"
                            onChange={handleChange}
                            value={values.product_brand}
                            help={touched.product_brand && errors.product_brand}
                            validateStatus={(touched.product_brand && errors.product_brand && 'error') || ''}
                        />
                        <NumberInput
                            name={'product_quantity'}
                            onChange={handleChange}
                            value={values.product_quantity}
                            help={touched.product_quantity && errors.product_quantity}
                            validateStatus={(touched.product_quantity && errors.product_quantity && 'error') || ''}
                            label="Product Quantity"
                        />
                    </form>
                </DrawerBody>

                <DrawerFooter>
                    <div className="flex gap-4">
                        <Button
                            background={'blue.600'}
                            loading={isSubmitting}
                            colorScheme="blue"
                            name="Edit Product"
                            onClick={handleSubmit}
                        />
                        <Button
                            background={'red.500'}
                            colorScheme="red"
                            name="Cancel"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default EditProduct;
