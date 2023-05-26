import React from 'react';
import { FormControl, FormLabel, Textarea as ChakraTextArea, FormErrorMessage, TextareaProps } from '@chakra-ui/react';
import { omit } from 'lodash';
import extendedStyles from '@/styles/extendedStyles';

interface IProps extends TextareaProps {
    label?: string;
    validateStatus?: any;
    help?: React.ReactNode;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
}

const { InputSX, LabelSX } = extendedStyles;

const TextArea: React.FC<IProps> = (props) => {
    const { label, value, placeholder, validateStatus, help, className = '', variant } = props;

    return (
        <FormControl isInvalid={validateStatus === 'error' ? true : false}>
            <FormLabel sx={LabelSX}>{label}</FormLabel>
            <ChakraTextArea
                textStyle="p"
                size="md"
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

export default TextArea;
