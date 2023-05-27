import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text } from '@chakra-ui/react';
import { Product } from '@/utils/types';
import Button from '@/components/common/components/Button';
import helpers from '@/utils/helper';
import GbImage from '@/components/common/components/GbImage';
import constants from './constants';
import CustomSpinner from '@/components/common/components/Spinner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ProductService from '@/config/services/product';
import logger from '@/logger';
import CustomAlertDialog from '@/components/common/components/AlertDialog';
import EditProduct from './EditProduct';

interface IProps {
    data: Product[] | undefined;
    isLoading: boolean;
}

const { TABLE_HEADINGS } = constants;

const ProductsTable: React.FC<IProps> = ({ data, isLoading }) => {
    const [loadingId, setLoadingId] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenEdit, setIsOpenEdit] = React.useState(false);
    const [currentProduct, setCurrentProduct] = React.useState<Product | any>();
    const queryClient = useQueryClient();

    const mutation = useMutation(ProductService.deleteProduct);

    const handleDelete = async (id: string) => {
        setLoadingId(id);
        setLoading(true);
        try {
            const response = await mutation.mutateAsync(id);
            if (!response.success) {
                return helpers.openNotification({ message: response.message, type: 'error' });
            }
            helpers.openNotification({ message: response.message, type: 'success' });
            queryClient.invalidateQueries(['products']);
        } catch (error) {
            return logger(error);
        } finally {
            setLoadingId(null);
            setLoading(false);
            setIsOpen(false);
        }
    };

    if (isLoading) return <CustomSpinner />;
    return (
        <div className="w-[98%] mx-auto">
            <TableContainer bg="white">
                <Table size="md">
                    <Thead bg={'blue.600'}>
                        <Tr>
                            {TABLE_HEADINGS.map((text) => (
                                <Th key={text} color={'white'} fontFamily={'satoshi'}>
                                    {text}
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((product, index) => (
                            <Tr textStyle="tableText" key={product?._id}>
                                <Td>{index + 1}</Td>
                                <Td>{helpers.formatDate(product?.createdAt)}</Td>
                                <Td>
                                    <GbImage src={product?.product_image} alt="product" width={80} height={80} />
                                </Td>
                                <Td className="capitalize">{product?.product_name}</Td>
                                <Td>
                                    <Text noOfLines={1}>
                                        ₦{' '}
                                        {helpers.formatNumber({
                                            notation: 'standard',
                                            number: product?.product_price,
                                        })}
                                    </Text>
                                </Td>
                                <Td className="capitalize">{product?.product_brand}</Td>
                                <Td className="capitalize">{product?.product_quantity}</Td>
                                <Td>
                                    <div className="flex gap-4">
                                        <Button
                                            name="Edit"
                                            onClick={() => {
                                                setCurrentProduct(product);
                                                setIsOpenEdit(true);
                                            }}
                                        />
                                        <Button
                                            name="Delete"
                                            colorScheme="red"
                                            background="red.500"
                                            loadingText="Deleting......"
                                            onClick={() => {
                                                setIsOpen(true);
                                                setLoadingId(product?._id);
                                            }}
                                        />
                                    </div>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

                <CustomAlertDialog
                    loading={loading}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    handleDelete={() => handleDelete(loadingId)}
                    title="Delete Product"
                />
                <EditProduct isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} currentProduct={currentProduct} />
                {data?.length === 0 && (
                    <div className="min-h-[30vh] shadow-md flex justify-center items-center">NO DATA</div>
                )}
            </TableContainer>
        </div>
    );
};

export default ProductsTable;
