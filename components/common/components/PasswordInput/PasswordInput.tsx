import React from 'react';
import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    FormErrorMessage,
    InputProps,
    InputRightElement,
    InputGroup,
} from '@chakra-ui/react';
import { omit } from 'lodash';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import extendedStyles from '@/styles/extendedStyles';

interface IProps extends InputProps {
    label?: string;
    validateStatus?: boolean;
    help?: React.ReactNode;
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
}

const { InputSX, LabelSX } = extendedStyles;

const PasswordInput: React.FC<IProps> = (props) => {
    const { label, value, placeholder, validateStatus, help, className = '', variant } = props;

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <FormControl isInvalid={validateStatus}>
            <FormLabel sx={LabelSX}>{label}</FormLabel>
            <InputGroup size="lg">
                <ChakraInput
                    variant={variant || 'outline'}
                    type={show ? 'text' : 'password'}
                    value={value}
                    placeholder={placeholder}
                    {...omit(props, ['validateStatus', 'className', 'help'])}
                    className={className}
                    sx={InputSX}
                />
                <InputRightElement width="4.5rem">
                    {show ? (
                        <AiOutlineEyeInvisible
                            onClick={handleClick}
                            size="22px"
                            color="#718096"
                            className="cursor-pointer"
                        />
                    ) : (
                        <AiOutlineEye onClick={handleClick} size="22px" color="#718096" className="cursor-pointer" />
                    )}
                </InputRightElement>
            </InputGroup>

            {help && <FormErrorMessage>{help}</FormErrorMessage>}
        </FormControl>
    );
};

export default PasswordInput;
