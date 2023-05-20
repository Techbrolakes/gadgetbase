import React from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import '@styles/globals.scss';
import '@styles/custom.scss';
import store from '@store';
import theme from '@/theme';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </Provider>
        </ChakraProvider>
    );
}
