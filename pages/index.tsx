import React from 'react';
import PageHead from '@components/common/components/PageHead';
import Input from '@/components/common/components/Input';
import PasswordInput from '@/components/common/components/PasswordInput/PasswordInput';
import Select from '@/components/common/components/Select';
import Button from '@/components/common/components/Button';
import { Text } from '@chakra-ui/react';

export default function HomePage() {
    const [name, setName] = React.useState('');
    const [select, setSelect] = React.useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value);
    };

    console.log('name', name);
    console.log('select', select);

    return (
        <>
            <PageHead title="Homepage" />
            <h1>Hello World</h1>
            <div className="w-full lg:w-1/3 mx-auto space-y-6">
                <Input
                    label="Please Enter Name"
                    value={name}
                    validateStatus={true}
                    variant="outline"
                    onChange={handleNameChange}
                    placeholder="Enter Name"
                />
                <PasswordInput label="Please Enter Password" variant="outline" placeholder="Password" />

                <Select
                    variant="outline"
                    label="Please Select Field"
                    placeholder="Select Field"
                    value={select}
                    onChange={handleSelectChange}
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                    ]}
                />

                <Text textStyle="p">Button Variants</Text>

                <Button name="Submit" loadingText="Loading" width="fit-content" />
            </div>
        </>
    );
}
