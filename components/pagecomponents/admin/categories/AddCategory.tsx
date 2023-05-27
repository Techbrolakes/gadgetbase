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
import { useFormik } from 'formik';
import logger from '@/logger';
import helpers from '@/utils/helper';
import CategoryService from '@/config/services/categories';
import Input from '@/components/common/components/Input';
import Button from '@/components/common/components/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import schema from './validation';

interface IProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCategory: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
    const queryClient = useQueryClient();
    const mutation = useMutation(CategoryService.createProductCategory);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            category_description: '',
            category_name: '',
        },
        onSubmit: async ({ category_name, category_description }, { setSubmitting, resetForm }) => {
            const payload = { category_description, category_name };
            try {
                const response = await mutation.mutateAsync(payload);

                if (!response.success) {
                    return helpers.openNotification({ message: response.message, type: 'error' });
                }

                helpers.openNotification({ message: response.message, type: 'success' });
                // Invalidate the query and refetch the data
                queryClient.invalidateQueries(['productCategories']);
            } catch (error) {
                return logger(error);
            } finally {
                setSubmitting(false);
                setIsOpen(false);
                resetForm();
            }
        },
        validationSchema: schema.createCategorySchema,
    });

    const { handleChange, values, handleSubmit, isSubmitting, errors, touched } = formik;

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={() => setIsOpen(false)}>
            <DrawerOverlay className="opacity-20 bg-black" />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create new category</DrawerHeader>

                <DrawerBody>
                    <div className="space-y-10 mt-6">
                        <Input
                            name={'category_name'}
                            onChange={handleChange}
                            value={values.category_name}
                            help={touched.category_name && errors.category_name}
                            validateStatus={(touched.category_name && errors.category_name && 'error') || ''}
                            label="Category Name"
                            placeholder="Enter Category Name"
                        />
                        <Input
                            name={'category_description'}
                            onChange={handleChange}
                            value={values.category_description}
                            help={touched.category_description && errors.category_description}
                            validateStatus={
                                (touched.category_description && errors.category_description && 'error') || ''
                            }
                            label="Category Description"
                            placeholder="Enter Category Description"
                        />
                    </div>
                </DrawerBody>

                <DrawerFooter>
                    <div className="flex gap-4">
                        <Button
                            name="Create Category"
                            loadingText="Creating....."
                            onClick={handleSubmit}
                            loading={isSubmitting}
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

export default AddCategory;
