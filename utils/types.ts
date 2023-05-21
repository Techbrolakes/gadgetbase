export type Category = {
    _id: string;
    category_name: string;
    category_image?: string;
    category_description: string;
    createdAt: Date;
    updatedAt?: Date;
};

export type Product = {
    _id: string;
    category_id: string;
    product_name: string;
    product_price: number;
    product_description: string;
    product_image: string;
    product_brand: string;
    product_quantity: number;
    createdAt: Date;
    updatedAt: Date;
};

export type ProductParams = {
    id?: any;
    search?: any;
    pageLimit?: number;
    page?: number;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
};

export type IUser = {
    first_name: string;
    last_name: string;
    email: string;
};

export type ILogin = {
    token: string;
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    admin: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export type Payload = Record<string, unknown>;
