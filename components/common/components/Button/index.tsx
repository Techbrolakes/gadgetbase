import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface IProps extends ButtonProps {
    name: string;
    loading?: boolean;
    loadingText?: string;
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled' | undefined;
    colorScheme?: string;
}

const Button: React.FC<IProps> = ({ name, loading, loadingText, variant, colorScheme }) => {
    return (
        <ChakraButton
            colorScheme={colorScheme || 'blue'}
            variant={variant}
            isLoading={loading}
            loadingText={loadingText || 'Submitting'}
        >
            {name}
        </ChakraButton>
    );
};

export default Button;
