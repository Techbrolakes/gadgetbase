import * as yup from 'yup';

const createCategorySchema = yup.object({
    category_description: yup.string().label('Category Description').required(),
    category_name: yup.string().required().label('Category Name'),
});

const schema = {
    createCategorySchema,
};

export default schema;
