import CustomSpinner from '@/components/common/components/Spinner';
import useGetProductCategories from '@/hooks/categories';
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from '@/components/common/components/Button';
import helpers from '@/utils/helper';
import CategoryService from '@/config/services/categories';
import logger from '@/logger';
import { Category } from '@/utils/types';
import EditCategory from './EditCategory';

const CategoriesTable: React.FC = () => {
    const queryClient = useQueryClient();
    const { data, isLoading } = useGetProductCategories();
    const [loadingId, setLoadingId] = React.useState<string | null>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentCategory, setCurrentCategory] = React.useState<Category>();

    const mutation = useMutation(CategoryService.deleteProductCategory);

    const handleDelete = async (id: string) => {
        setLoadingId(id);
        try {
            const response = await mutation.mutateAsync(id);
            if (!response.success) {
                return helpers.openNotification({ message: response.message, type: 'error' });
            }

            helpers.openNotification({ message: response.message, type: 'success' });
            // Invalidate the query and refetch the data
            queryClient.invalidateQueries(['productCategories']);
        } catch (error) {
            return logger(error);
        } finally {
            setLoadingId(null);
        }
    };

    if (isLoading) return <CustomSpinner />;
    return (
        <TableContainer bg="white">
            <Table size="lg">
                <Thead>
                    <Tr>
                        <Th>S/N</Th>
                        <Th>Date</Th>
                        <Th>Category Name</Th>
                        <Th>Category Description</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.data?.map(({ _id, category_name, category_description, createdAt }, index) => (
                        <Tr textStyle="p" key={_id}>
                            <Td>{index + 1}</Td>
                            <Td>{helpers.formatDate(createdAt)}</Td>
                            <Td className="capitalize">{category_name}</Td>
                            <Td>
                                <Text noOfLines={1}>{category_description}</Text>
                            </Td>
                            <Td>
                                <div className="flex gap-4">
                                    <Button
                                        name="Edit"
                                        onClick={() => {
                                            setIsOpen(true);
                                            setCurrentCategory({ _id, category_description, category_name, createdAt });
                                        }}
                                    />
                                    <Button
                                        name="Delete"
                                        colorScheme="red"
                                        background="red.500"
                                        onClick={() => handleDelete(_id)}
                                        loading={loadingId === _id}
                                        loadingText="Deleting......"
                                    />
                                </div>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <EditCategory isOpen={isOpen} setIsOpen={setIsOpen} currentCategory={currentCategory} />
        </TableContainer>
    );
};

export default CategoriesTable;
