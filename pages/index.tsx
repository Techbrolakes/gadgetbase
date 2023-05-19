import React from 'react';
import PageHead from '@components/common/components/PageHead';
import { TextField } from '@mui/material';

export default function HomePage() {
    return (
        <>
            <PageHead title="Homepage" />
            <h1>Hello World</h1>
            <TextField
                variant="outlined"
                label="Enter Name"
                sx={{
                    backgroundColor: 'white',
                    borderColor: 'red',
                    color: 'red',
                    outlineColor: 'red',
                }}
            />
        </>
    );
}
