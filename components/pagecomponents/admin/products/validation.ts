import * as yup from 'yup';

const createProduct = yup.object({
    category_id: yup.string().label('Category Id').required(),
    product_brand: yup.string().label('Product Brand').required(),
    product_description: yup.string().label('Product Description').required(),
    product_image: yup.string().label('Product Image').required(),
    product_name: yup.string().label('Product Name').required(),
    product_price: yup.string().label('Product Price').required(),
    product_quantity: yup.string().label('Product Quantity').required(),
});

const schema = {
    createProduct,
};

export default schema;
