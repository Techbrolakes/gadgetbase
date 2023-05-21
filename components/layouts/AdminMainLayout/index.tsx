import React from 'react';
import Sidebar from './Sidebar';
import { Box, Grid, GridItem, Show } from '@chakra-ui/react';

interface IProps {
    children: React.ReactNode;
}
const AdminMainLayout: React.FC<IProps> = ({ children }) => {
    return (
        <Grid
            templateAreas={{ base: `"main"`, lg: `"aside main"` }}
            templateColumns={{ base: '1fr', lg: '200px 1fr' }}
            height="100%"
        >
            <Show above="lg">
                <GridItem overflowY="auto" h="100vh">
                    <Sidebar />
                </GridItem>
            </Show>
            <GridItem>
                <Box overflowY="auto" h="calc(100vh - 2px)" id="scrollableDiv">
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                    <div>{children}</div>
                </Box>
            </GridItem>
        </Grid>
    );
};

export default AdminMainLayout;
