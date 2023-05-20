import React from 'react';
import { FormControl, FormLabel, Select as ChakraSelect, FormErrorMessage, SelectProps } from '@chakra-ui/react';
import { omit } from 'lodash';

interface IOption {
    value: string;
    label: string;
}

interface IProps extends SelectProps {
    label?: string;
    validateStatus?: boolean;
    help?: React.ReactNode;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
    options: IOption[];
}

const Select: React.FC<IProps> = (props) => {
    const { label, value, placeholder, validateStatus, help, className = '', variant, options } = props;

    return (
        <FormControl isInvalid={validateStatus}>
            <FormLabel textStyle="p">{label}</FormLabel>
            <ChakraSelect
                size="lg"
                variant={variant || 'outline'}
                value={value}
                placeholder={placeholder}
                {...omit(props, ['validateStatus', 'className', 'help'])}
                className={className}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </ChakraSelect>
            {help && <FormErrorMessage>{help}</FormErrorMessage>}
        </FormControl>
    );
};

export default Select;
