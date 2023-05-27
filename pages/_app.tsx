import React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../styles/nprogress.css';
import '@styles/globals.scss';
import '@styles/custom.scss';
import 'react-toastify/dist/ReactToastify.css';
import store from '@store';
import theme from '@/theme';

const queryClient = new QueryClient();

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript />
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                    <ToastContainer />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </Provider>
        </ChakraProvider>
    );
}
