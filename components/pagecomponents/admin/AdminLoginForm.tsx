import React, { useState } from 'react';

const AdminLoginForm: React.FC = () => {
    const [text, setText] = useState('');

    console.log(text);

    return (
        <section className="bg-auth min-h-screen grid place-items-center">
            <div className="bg-white h-[470px] w-[500px] shadow-md gb-radius flex flex-col justify-center items-center">
                <main className="space-y-12 flex flex-col w-4/5">
                    <h1 className="text-3xl text-gray-700 font-bold text-center">Admin Login</h1>
                </main>
            </div>
        </section>
    );
};

export default AdminLoginForm;
