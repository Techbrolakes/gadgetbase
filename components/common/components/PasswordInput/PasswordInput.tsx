import React from 'react';
import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    FormErrorMessage,
    InputProps,
    InputRightElement,
    Button,
    InputGroup,
} from '@chakra-ui/react';
import { omit } from 'lodash';

interface IProps extends InputProps {
    label?: string;
    validateStatus?: boolean;
    help?: React.ReactNode;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
}

const PasswordInput: React.FC<IProps> = (props) => {
    const { label, value, placeholder, validateStatus, help, className = '', variant } = props;

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <FormControl isInvalid={validateStatus}>
            <FormLabel textStyle="p">{label}</FormLabel>
            <InputGroup size="lg">
                <ChakraInput
                    variant={variant || 'outline'}
                    type={show ? 'text' : 'password'}
                    value={value}
                    placeholder={placeholder}
                    {...omit(props, ['validateStatus', 'className', 'help'])}
                    className={className}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>

            {help && <FormErrorMessage>{help}</FormErrorMessage>}
        </FormControl>
    );
};

export default PasswordInput;
