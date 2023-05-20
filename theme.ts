import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                _disabled: {
                    bg: 'blue.600', // Customize the background color for the disabled state
                    color: 'white', // Customize the text color for the disabled state
                    cursor: 'not-allowed',
                    opacity: 1,
                },
            },
        },
    },
    textStyles: {
        h1: {
            fontSize: ['48px', '72px'],
            fontWeight: 'bold',
            letterSpacing: '-2%',
            lineHeight: '110%',
        },
        h2: {
            fontSize: ['36px', '48px'],
            fontWeight: 'semibold',
            letterSpacing: '-1%',
            lineHeight: '110%',
        },
        p: {
            color: 'gray.600',
            fontSize: ['16px', '20px'],
            fontWeight: 'normal',
            lineHeight: '110%',
        },
    },
});

export default theme;
