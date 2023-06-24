const API = {
    baseURL: 'https://gadgetbase-api.onrender.com/api/v1/',
    error: {
        aborted: {
            code: 'ECONNABORTED',
            description: 'Please check your network connection and try again',
            message: 'Network Error!',
        },
        expiredToken: 'Access denied. Token Expired',
    },
    routes: {
        address: {
            createAddress: 'address/create-address',
            deleteAddress: 'address/delete-address/%id%',
            getAddresses: 'address/get-addresses',
            getDefaultAddress: 'address/get-default-address',
            getSingleAddress: 'address/get-address/%id%',
            makeDefaultAddress: 'address/make-default-address/%id%',
            updateAddress: 'address/update-address/%id%',
        },
        auth: {
            login: 'user/login',
            recoverPassword: 'user/recover',
            registerUser: 'user/register',
            resendVerification: 'user/resend',
            resetPassword: 'user/reset-password',
            verifyOtp: '/user/verify-otp',
        },
        category: {
            createProductCategory: 'product/create-product-category',
            deleteProductCategory: 'product/delete-product-category/%id%',
            getProductCategories: 'product/get-product-categories',
            updateProductCategory: 'product/update-product-category/%id%',
        },
        orders: {
            changeOrderStatus: 'order/change-order-status/%id%',
            createOrder: 'order/create-order',
            getOrderStats: 'order/order-stats',
            getUserOrders: 'order/user-orders',
            payOnDelivery: 'order/pay-on-delivery',
        },
        products: {
            createProduct: 'product/create-product',
            deleteProduct: 'product/delete-product/%id%',
            getProductBrandsByCategoryId: 'product/get-products-brands/%id%',
            getProductByCategoryId: 'product/get-product-category/%id%',
            getProducts: 'product/get-products',
            getProductsBrands: 'product/get-products-brands',
            getSingleProduct: 'product/get-product/%id%',
            updateProduct: 'product/update-product/%id%',
        },
        userManagement: {
            editUser: 'user/edit',
            getUserDetails: 'user/get',
            resetPassword: 'user/reset',
        },
    },
    timeout: 500000,
};

const COOKIES = {
    maxAge: 21600,
    path: '/',
    user: 'gadgetbase-user',
};

const CLIENT_ROUTES = {
    admin: {
        categories: '/admin/categories',
        orders: '/admin/orders',
        overview: '/admin/overview',
        products: '/admin/products',
        settings: '/admin/settings',
        users: '/admin/users',
    },
    home: '/',
    products: {
        allProducts: '/products',
        category: '/products/category/%id%',
        single: '/products/%id%',
    },
};

const constants = {
    API,
    CLIENT_ROUTES,
    COOKIES,
};

export default constants;
