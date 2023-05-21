import React from 'react';
import Button from '@/components/common/components/Button';
import Input from '@/components/common/components/Input';
import PasswordInput from '@/components/common/components/PasswordInput/PasswordInput';
import { Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import logger from '@/logger';
import AuthService from '@/config/services/auth';
import schema from './validation';
import nookies from 'nookies';
import constants from '@config/constants';
import helpers from '@/utils/helper';
import { useRouter } from 'next/router';

const { COOKIES } = constants;

const AdminLoginForm: React.FC = () => {
    const router = useRouter();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async ({ email, password }, { setSubmitting }) => {
            const payload = { email, password };
            try {
                const response = await AuthService.login(payload);
                if (!response.success) {
                    return helpers.openNotification({ message: response.message, type: 'error' });
                }
                if (response.data.admin === false) {
                    return helpers.openNotification({ message: 'You are not an admin, contact lekan', type: 'error' });
                }
                nookies.set(null, COOKIES.user, response.data.token, {
                    maxAge: COOKIES.maxAge,
                    path: COOKIES.path,
                });
                helpers.openNotification({ message: response.message, type: 'success' });
                return await router.push('/admin/overview');
            } catch (error) {
                return logger(error);
            } finally {
                setSubmitting(false);
            }
        },
        validationSchema: schema.loginSchema,
    });

    const { handleChange, values, handleSubmit, isSubmitting, errors, touched } = formik;

    return (
        <section className="bg-primarybg min-h-screen flex justify-center gap-44 items-center">
            <div className="space-y-6 mt-[-140px]">
                <h1 className="text-customblue font-semibold text-5xl">Jump right back in</h1>
                <Text textStyle="p">Sign in to continue</Text>
            </div>
            <div className="bg-white h-[350px] w-[600px] shadow-sm rounded-md flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="w-4/5 space-y-12">
                    <Input
                        name={'email'}
                        onChange={handleChange}
                        value={values.email}
                        help={touched.email && errors.email}
                        validateStatus={(touched.email && errors.email && 'error') || ''}
                        placeholder="Email Address"
                    />
                    <PasswordInput
                        onChange={handleChange}
                        name={'password'}
                        value={values.password}
                        help={touched.password && errors.password}
                        validateStatus={(touched.password && errors.password && 'error') || ''}
                        placeholder="Password"
                    />
                    <Button name="Submit" onClick={() => handleSubmit()} loading={isSubmitting} width="fit-content" />
                </form>
            </div>
        </section>
    );
};

export default AdminLoginForm;
