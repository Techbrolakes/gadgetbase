import React from 'react';
import { FormControl, FormLabel, Select as ChakraSelect, FormErrorMessage, SelectProps } from '@chakra-ui/react';
import { omit } from 'lodash';
import extendedStyles from '@/styles/extendedStyles';

interface IOption {
    value: string;
    label: string;
}

interface IProps extends SelectProps {
    label?: string;
    validateStatus?: boolean;
    help?: React.ReactNode;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
    options: IOption[] | any;
}

const { InputSX, LabelSX } = extendedStyles;

const Select: React.FC<IProps> = (props) => {
    const { label, value, placeholder, validateStatus, help, className = '', variant, options } = props;

    return (
        <FormControl isInvalid={validateStatus}>
            <FormLabel sx={LabelSX}>{label}</FormLabel>
            <ChakraSelect
                size="lg"
                variant={variant || 'outline'}
                value={value}
                placeholder={placeholder}
                {...omit(props, ['validateStatus', 'className', 'help'])}
                className={className}
                sx={InputSX}
            >
                {options.map((option: any) => (
                    <option className="space-y-4 capitalize" key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </ChakraSelect>
            {help && <FormErrorMessage>{help}</FormErrorMessage>}
        </FormControl>
    );
};

export default Select;
