/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [],
    theme: {
        extend: {
            colors: {
                customblue: '#0A2E65',
                customblue2: '#1A365D',
                primarybg: '#F4F4F4',
            },
        },
    },
};
