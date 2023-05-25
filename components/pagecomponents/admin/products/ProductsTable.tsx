import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text } from '@chakra-ui/react';
import { Product } from '@/utils/types';
import Button from '@/components/common/components/Button';
import helpers from '@/utils/helper';
import GbImage from '@/components/common/components/GbImage';
import constants from './constants';
import CustomSpinner from '@/components/common/components/Spinner';

interface IProps {
    data: Product[] | undefined;
    isLoading: boolean;
}

const { TABLE_HEADINGS } = constants;

const ProductsTable: React.FC<IProps> = ({ data, isLoading }) => {
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
                        {data?.map(
                            (
                                {
                                    _id,
                                    createdAt,
                                    product_name,
                                    product_price,
                                    product_quantity,
                                    product_brand,
                                    product_image,
                                },
                                index,
                            ) => (
                                <Tr textStyle="tableText" key={_id}>
                                    <Td>{index + 1}</Td>
                                    <Td>{helpers.formatDate(createdAt)}</Td>
                                    <Td>
                                        <GbImage src={product_image} alt="product" width={80} height={80} />
                                    </Td>
                                    <Td className="capitalize">{product_name}</Td>
                                    <Td>
                                        <Text noOfLines={1}>
                                            ₦{' '}
                                            {helpers.formatNumber({
                                                notation: 'standard',
                                                number: product_price,
                                            })}
                                        </Text>
                                    </Td>
                                    <Td className="capitalize">{product_brand}</Td>
                                    <Td className="capitalize">{product_quantity}</Td>
                                    <Td>
                                        <div className="flex gap-4">
                                            <Button name="Edit" />
                                            <Button
                                                name="Delete"
                                                colorScheme="red"
                                                background="red.500"
                                                loadingText="Deleting......"
                                            />
                                        </div>
                                    </Td>
                                </Tr>
                            ),
                        )}
                    </Tbody>
                </Table>

                {data?.length === 0 && (
                    <div className="min-h-[30vh] shadow-md flex justify-center items-center">NO DATA</div>
                )}
            </TableContainer>
        </div>
    );
};

export default ProductsTable;
