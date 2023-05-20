import React from 'react';
import { FormControl, FormLabel, Input as ChakraInput, FormErrorMessage, InputProps } from '@chakra-ui/react';
import { omit } from 'lodash';

interface IProps extends InputProps {
    label?: string;
    validateStatus?: boolean;
    help?: React.ReactNode;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
}

const Input: React.FC<IProps> = (props) => {
    const { label, value, placeholder, validateStatus, help, className = '', variant } = props;

    return (
        <FormControl isInvalid={validateStatus}>
            <FormLabel textStyle="p">{label}</FormLabel>
            <ChakraInput
                textStyle="p"
                size="lg"
                variant={variant || 'outline'}
                value={value}
                placeholder={placeholder}
                {...omit(props, ['validateStatus', 'className', 'help'])}
                className={className}
            />
            {help && <FormErrorMessage>{help}</FormErrorMessage>}
        </FormControl>
    );
};

export default Input;
