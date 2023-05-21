import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    loading?: boolean;
    loadingText?: string;
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled' | undefined;
    colorScheme?: ButtonProps['colorScheme'];
    background?: ButtonProps['background'];
    width?: ButtonProps['width'];
    onClick?: () => void;
}

const Button: React.FC<IProps> = ({ name, loading, loadingText, variant, colorScheme, background, width, onClick }) => {
    return (
        <ChakraButton
            type="submit"
            background={background || 'blue.600'}
            colorScheme={colorScheme || 'blue'}
            borderRadius={'2px'}
            variant={variant}
            isLoading={loading}
            loadingText={loadingText || 'Submitting'}
            width={width}
            onClick={onClick}
        >
            {name}
        </ChakraButton>
    );
};

export default Button;
