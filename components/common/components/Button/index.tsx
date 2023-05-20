import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    loading?: boolean;
    loadingText?: string;
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled' | undefined;
    colorScheme?: string;
    background?: string;
    width?: ButtonProps['width'];
}

const Button: React.FC<IProps> = ({ name, loading, loadingText, variant, colorScheme, background, width }) => {
    return (
        <ChakraButton
            type="submit"
            background={background || 'blue.500'}
            colorScheme={colorScheme || 'blue'}
            borderRadius={'2px'}
            variant={variant}
            isLoading={loading}
            loadingText={loadingText || 'Submitting'}
            width={width}
        >
            {name}
        </ChakraButton>
    );
};

export default Button;
