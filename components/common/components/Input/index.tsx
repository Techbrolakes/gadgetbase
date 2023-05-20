import React from 'react';
import { FormControl, FormLabel, Input as ChakraInput, FormErrorMessage, InputProps } from '@chakra-ui/react';
import { omit } from 'lodash';
import extendedStyles from '@/styles/extendedStyles';

interface IProps extends InputProps {
    label?: string;
    validateStatus?: boolean;
    help?: React.ReactNode;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
}

const { InputSX, LabelSX } = extendedStyles;

const Input: React.FC<IProps> = (props) => {
    const { label, value, placeholder, validateStatus, help, className = '', variant } = props;

    return (
        <FormControl isInvalid={validateStatus}>
            <FormLabel sx={LabelSX}>{label}</FormLabel>
            <ChakraInput
                textStyle="p"
                size="lg"
                variant={variant || 'outline'}
                value={value}
                placeholder={placeholder}
                {...omit(props, ['validateStatus', 'className', 'help'])}
                className={className}
                sx={InputSX}
            />
            {help && <FormErrorMessage>{help}</FormErrorMessage>}
        </FormControl>
    );
};

export default Input;
