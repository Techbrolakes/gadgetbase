import React from 'react';
import {
    FormControl,
    FormLabel,
    NumberInputField as ChakraNumberInputField,
    NumberInput as ChakraNumberInput,
    FormErrorMessage,
    NumberInputFieldProps,
} from '@chakra-ui/react';
import { omit } from 'lodash';
import extendedStyles from '@/styles/extendedStyles';

interface IProps extends NumberInputFieldProps {
    label?: string;
    validateStatus?: any;
    help?: React.ReactNode;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
    value?: any;
}

const { InputSX, LabelSX } = extendedStyles;

const NumberInput: React.FC<IProps> = (props) => {
    const { label, value, placeholder, validateStatus, help, className = '', variant } = props;

    return (
        <FormControl isInvalid={validateStatus === 'error' ? true : false}>
            <FormLabel sx={LabelSX}>{label}</FormLabel>
            <ChakraNumberInput value={value}>
                <ChakraNumberInputField
                    textStyle="p"
                    variant={variant || 'outline'}
                    placeholder={placeholder}
                    {...omit(props, ['validateStatus', 'className', 'help'])}
                    className={className}
                    sx={InputSX}
                />
            </ChakraNumberInput>
            {help && <FormErrorMessage>{help}</FormErrorMessage>}
        </FormControl>
    );
};

export default NumberInput;
